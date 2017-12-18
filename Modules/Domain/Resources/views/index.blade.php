@extends('layouts.app')
@section('top-one')
    {{Bulma::breadcrumb([route('domain.index')=>'Trang web'])}}
@endsection
@section('top-tow')
    <ul class="top-link">
        <li>
            <a class="bg-primary has-hover-primary" href="{{route('domain.create')}}">Tạo mới</a>
        </li>
        <li>
            <a class="bg-light has-hover-light" href="{{route('domain.index')}}">Làm mới</a>
        </li>
        <li>
            <div class="dropdown">
                <div class="dropdown-trigger">
                    <button class="button is-small" type="button" aria-haspopup="true" aria-controls="dropdown-menu">
                        <span>Hiển thị {{request('per_page',50)}} dòng 1 trang</span>
                        <span class="icon is-small">
                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                          </span>
                    </button>
                </div>
                <div class="dropdown-menu" id="dropdown-per-row" role="menu">
                    <div class="dropdown-content">
                        <a href="{{route('domain.index',array_merge(request()->all(),['per_page'=>50]))}}"
                           class="dropdown-item">50</a>
                        <a href="{{route('domain.index',array_merge(request()->all(),['per_page'=>100]))}}"
                           class="dropdown-item">100</a>
                        <a href="{{route('domain.index',array_merge(request()->all(),['per_page'=>150]))}}"
                           class="dropdown-item">150</a>
                        <a href="{{route('domain.index',array_merge(request()->all(),['per_page'=>200]))}}"
                           class="dropdown-item">200</a>
                        <hr class="dropdown-divider">
                        <a href="{{route('domain.index',array_merge(['per_page'=>$domains->total()],request()->all()))}}"
                           class="dropdown-item">
                            Hiển thị tất cả ({{$domains->total()}})
                        </a>
                    </div>
                </div>
            </div>
        </li>
    </ul>
@endsection
@section('content')
    {!! Form::open(['method'=>'get','route'=>['domain.index','page'=>request('page')]]) !!}
    <table class="table is-bordered is-striped is-narrow is-fullwidth">
        <thead>
        <tr>
            <th></th>
            <th>Name
                {{Bulma::shortLink('domain.index','sort_name','alpha')}}
            </th>
            <th>Modules</th>
            <th>IP</th>
            <th>Server</th>
            <th>Type</th>
            <th>Status</th>
            <th>Users</th>
            <th></th>
        </tr>
        <tr>
            <td></td>
            <td>
                <input type="text" class="input is-small" value="{{request('name')}}" name="name" placeholder="Name">
            </td>
            <td>
                <div class="select is-fullwidth is-small">
                    {{Form::select('module',$modules,request('module'),['placeholder'=>'All Modules'])}}
                </div>
            </td>
            <td>
                <input type="text" class="input is-small" name="ip" value="{{request('ip')}}" placeholder="IP address">
            </td>
            <td>
                <div class="select is-fullwidth is-small">
                    {{Form::select('svr',config('domain.svr'),request('svr'),['placeholder'=>'All Server'])}}
                </div>
            </td>
            <td>
                <div class="select is-fullwidth is-small">
                    {{Form::select('type',config('domain.type'),request('type'),['placeholder'=>'All Type'])}}
                </div>
            </td>
            <td>
                <div class="select is-fullwidth is-small">
                    {{Form::select('status',config('domain.status'),request('status'),['placeholder'=>'All Status'])}}
                </div>
            </td>
            <td>
                <vue-select data-name="user" button-class="is-small" data-url="{{route('user.list')}}"></vue-select>
            </td>
            <td>
                <button type="submit" class="button is-small"><span class="icon"><i class="fa fa-search"></i> </span>
                </button>
            </td>
        </tr>
        </thead>
        <tbody>
        @foreach($domains as $domain)
            <tr>
                <td>{{$loop->iteration}}</td>
                <td>
                    <a href="//{{$domain->name}}" target="_blank">{{$domain->name}}</a>
                    <a href="{{route('domain.show',['uuid'=>$domain->uuid])}}">
                        <span class="icon"><i class="fa fa-eye"></i> </span>
                    </a>
                </td>
                <td>
                    <div class="tags">
                        @foreach($domain->module as $name)
                            <a href="{{route(strtolower($name).'.index',['domain'=>$domain->uuid])}}"
                               class="tag">{{$name}}</a>
                        @endforeach
                    </div>
                </td>
                <td>{{$domain->ip}}</td>
                <td>{{$domain->svr}}</td>
                <td>{{$domain->type}}</td>
                <td>{{$domain->status}}</td>
                <td>
                    <div class="tags">
                        @foreach($domain->users as $user)
                            <span class="tag tooltip" data-tooltip="{{$user->name}}">{{$user->email}}</span>
                        @endforeach
                    </div>
                </td>
                <td>
                    <a href="{{route('domain.edit',['uuid'=>$domain->uuid])}}">
                        <span class="icon"><i class="fa fa-edit"></i> </span>
                    </a>
                    <delete-link
                            data-message="Khi trang web được xóa thì mọi dữ liệu về bài viết và các dữ liệu liên quan đề bị xóa theo."
                            data-url="{{route('domain.destroy',['uuid'=>$domain->uuid])}}"
                    ></delete-link>
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
    {!! Form::close() !!}
@endsection
