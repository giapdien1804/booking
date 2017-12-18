@extends('layouts.app')
@section('top-one')
    {{Bulma::breadcrumb([route('user.index')=>'Người dùng'])}}
@endsection
@section('top-tow')
    <ul class="top-link">
        <li>
            <a class="bg-primary has-hover-primary" href="{{route('user.create')}}">Tạo mới</a>
        </li>
        <li>
            <a class="bg-light has-hover-light" href="{{route('user.index')}}">Làm mới</a>
        </li>
    </ul>
@endsection
@section('content')
    {!! Form::open(['method'=>'get','route'=>['user.index','page'=>request('page')]]) !!}
    <table class="table is-bordered is-striped is-narrow is-fullwidth">
        <thead>
        <tr>
            <th></th>
            <th>Name
                {{Bulma::shortLink('user.index','sort_name','alpha')}}
            </th>
            <th>Email
                {{Bulma::shortLink('user.index','sort_email','alpha')}}
            </th>
            <th>Status</th>
            <th>Domains</th>
            <th></th>
        </tr>
        <tr>
            <td></td>
            <td>
                <input type="text" class="input" placeholder="Name">
            </td>
            <td>
                <input type="text" class="input" placeholder="Email">
            </td>
            <td>
                <div class="select">
                    <select title="Status">
                        <option value="">All</option>
                        <option value="active">Active</option>
                        <option value="inactive">inActive</option>
                    </select>
                </div>
            </td>
            <td>
                <div class="select">
                    <select title="Status">
                        <option value="">All</option>
                        <option value="active">Active</option>
                        <option value="inactive">inActive</option>
                    </select>
                </div>
            </td>
            <td>
                <button type="submit" class="button"><span class="icon"><i class="fa fa-search"></i> </span></button>
            </td>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        </tbody>
    </table>
    {!! Form::close() !!}
@endsection
