<?php

namespace Modules\Domain\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Modules\Domain\Entities\Domain;
use Modules\Domain\Http\Requests\DomainRequest;
use Modules\User\Entities\User;

class DomainController extends Controller
{
    private $modules;
    private $users;

    function __construct()
    {
        $action = \Route::current()->getActionMethod();
        if ($action == 'create' || $action == 'edit' || $action == 'index') {
            $this->users = User::select(['uuid', 'name', 'email'])->get();
            $this->modules = collect(\Module::enabled())->filter(function ($val) {
                return !in_array($val->name, config('modules.hide'));
            })->all();

            view()->share(['modules' => $this->modules, 'users' => $this->users]);
        }
    }

    /**
     * Display a listing of the resource.
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $per_page = $request->get('per_page', 50);
        $domains = Domain::with('users');
        //search
        if ($request->input('name', null) != null)
            $domains->where('name', 'like', "%{$request->input('name')}%");
        if ($request->input('svr', null) != null)
            $domains->whereSvr($request->get('svr'));
        if ($request->input('ip', null) != null)
            $domains->whereIp($request->get('ip'));
        if ($request->input('type', null) != null)
            $domains->whereIp($request->get('type'));
        if ($request->input('status', null) != null)
            $domains->whereIp($request->get('status'));
        if ($request->input('user', null) != null)
            $domains->whereHas('users', function ($q) use ($request) {
                $q->find($request->get('user'));
            });

        $domains = $domains
            ->orderBy('name', $request->get('sort_name', 'asc'))
            ->paginate($per_page);
        return view('domain::index', compact('domains'));
    }

    /**
     * Show the form for creating a new resource.
     * @return Response
     */
    public function create()
    {
        return view('domain::create');
    }

    /**
     * Store a newly created resource in storage.
     * @param DomainRequest $request
     * @return Response
     */
    public function store(DomainRequest $request)
    {
        $domain = Domain::create($request->all());
        $user_uuid = $request->get('user_uuid');
        $domain->users()->sync($user_uuid);

        return redirect()->route('domain.index')->with('message', 'Đã thêm domain mới');
    }

    /**
     * Show the specified resource.
     * @param $uuid
     * @return Response
     */
    public function show($uuid)
    {
        $domain = Domain::find($uuid);
        return view('domain::show', compact('domain'));
    }

    /**
     * Show the form for editing the specified resource.
     * @param string $uuid
     * @return Response
     */
    public function edit($uuid)
    {
        $domain = Domain::with('users')->find($uuid);
        return view('domain::edit', compact('domain'));
    }

    /**
     * Update the specified resource in storage.
     * @param  Request $request
     * @param $uuid
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(Request $request, $uuid)
    {
        $domain = Domain::findOrFail($uuid);
        $domain->update($request->all());
        $domain->users()->sync($request->get('user_uuid'));

        return redirect()->route('domain.index')->with('message', 'Cập nhật thành công');
    }

    /**
     * Remove the specified resource from storage.
     * @param string $uuid
     * @return Response
     */
    public function destroy($uuid)
    {
        if (Domain::destroy($uuid))
            return response()->json(['location' => route('domain.index'), 'notification' => 'Đã xóa domain']);

        return abort(403);
    }
}
