@extends('layouts.app')
@section('top-one')
    {{Bulma::breadcrumb([
    route('domain.index')=>'Trang web',
    route('domain.show',['uuid'=>$domain->uuid])=>$domain->name,
    ])}}
@endsection
@section('top-tow')
    <div class="field is-grouped">
        <div class="control is-expanded">
            <a class="button is-dark border-radius-0 is-fullwidth" href="{{route('domain.create')}}">
                <span class="icon"><i class="fa fa-plus"></i> </span>
            </a>
        </div>
        <div class="control">
            <a class="button border-radius-0" href="{{route('domain.show',['uuid'=>$domain->uuid])}}">
                <span class="icon"><i class="fa fa-refresh"></i> </span>
            </a>
        </div>
        <div class="control">
            <domain-dropdown
                    data-selected="{{json_encode(['uuid'=>$domain->uuid,'name'=>$domain->name])}}"
                    goto-url="/domain/{id}/show">
            </domain-dropdown>
        </div>
    </div>
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
                    <div class="card-content">
                        @include(lcfirst($module).'::show-module')
                    </div>
                    <footer class="card-footer">
                        <a href="{{route(lcfirst($module).'.index',['domain'=>$domain->uuid])}}"
                           class="card-footer-item">Quản lý</a>
                    </footer>
                </div>
            </div>
        @endforeach
    </div>
@endsection
