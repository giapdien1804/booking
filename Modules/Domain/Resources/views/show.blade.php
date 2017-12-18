@extends('layouts.app')
@section('top-one')
    {{Bulma::breadcrumb([
    route('domain.index')=>'Trang web',
    route('domain.show',['uuid'=>$domain->uuid])=>$domain->name,
    ])}}
@endsection
@section('top-tow')
    <ul class="top-link">
        <li>
            <a class="bg-primary has-hover-primary" href="{{route('domain.create')}}">Tạo mới</a>
        </li>
        <li>
            <a class="bg-light has-hover-light" href="{{route('domain.show',['uuid'=>$domain->uuid])}}">Làm mới</a>
        </li>
    </ul>
@endsection
@section('content')
    <div class="columns is-multiline has-width-4">
        @foreach($domain->module as $module)
            <div class="column">
                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">
                            {{$module}}
                        </p>
                    </header>
                    <div class="card-content p-1">
                        <div class="panel list-group">
                            <a class="panel-block list-group-item is-primary">1. Lorem ipsum dolor sit amet.</a>
                            <a class="panel-block list-group-item is-info">2. Lorem ipsum dolor sit amet.</a>
                            <a class="panel-block list-group-item is-success">3. Lorem ipsum dolor sit amet.</a>
                            <a class="panel-block list-group-item is-warning">4. Lorem ipsum dolor sit amet.</a>
                            <a class="panel-block list-group-item is-danger">5. Lorem ipsum dolor sit amet.</a>
                            <a class="panel-block list-group-item">6. Lorem ipsum dolor sit amet.</a>
                            <a class="panel-block list-group-item">7. Lorem ipsum dolor sit amet.</a>
                        </div>
                    </div>
                    <footer class="card-footer">
                        <a href="{{route(strtolower($module).'.index',['domain'=>$domain->uuid])}}"
                           class="card-footer-item">Quản lý</a>
                    </footer>
                </div>
            </div>
        @endforeach
    </div>
@endsection
