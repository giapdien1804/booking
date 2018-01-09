<?php

namespace Modules\Hotel\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Modules\Hotel\Entities\Hotel;

class HotelController extends Controller
{
    /**
     * Display a listing of the resource.
     * @param Request $request
     * @param $domain
     * @return Response
     */
    public function index(Request $request, $domain)
    {
        $per_page = $request->get('per_page', 50);
        $hotels = Hotel::with('location')->whereDomainUuid($domain);

        //search
        if ($request->input('title', null) != null)
            $hotels->where('title', 'like', "%{$request->input('title')}%");
        if ($request->input('star', null) != null)
            $hotels->whereStar($request->get('star'));
        if ($request->input('location_uuid', null) != null)
            $hotels->whereLocationUuid($request->get('location_uuid'));

        $hotels = $hotels
            ->orderBy('name', $request->get('sort_name', 'asc'))
            ->paginate($per_page);

        return view('hotel::index', compact('hotels'));
    }

    /**
     * Show the form for creating a new resource.
     * @return Response
     */
    public function create($domain)
    {
        return view('hotel::create');
    }

    /**
     * Store a newly created resource in storage.
     * @param  Request $request
     * @return Response
     */
    public function store(Request $request, $domain)
    {
    }

    /**
     * Show the specified resource.
     * @return Response
     */
    public function show($uuid)
    {
        return view('hotel::show');
    }

    /**
     * Show the form for editing the specified resource.
     * @return Response
     */
    public function edit($uuid)
    {
        return view('hotel::edit');
    }

    /**
     * Update the specified resource in storage.
     * @param  Request $request
     * @return Response
     */
    public function update(Request $request, $uuid)
    {
    }

    /**
     * Remove the specified resource from storage.
     * @return Response
     */
    public function destroy($uuid)
    {
    }
}
