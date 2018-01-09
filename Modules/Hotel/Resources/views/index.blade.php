@extends('layouts.app')
@section('top-one')
    {{Bulma::breadcrumb([
        route('domain.index')=>'Trang web',
        route('domain.show',['uuid'=>$current_domain->uuid])=>$current_domain->name,
        route('hotel.index',['domain'=>$current_domain->uuid])=>'Khách sạn'
    ])}}
@endsection
@section('top-tow')
    <div class="field is-grouped">
        <div class="control is-expanded">
            <a class="button is-dark border-radius-0 is-fullwidth"
               href="{{route('hotel.create',['domain'=>$current_domain->uuid])}}">
                <span class="icon"><i class="fa fa-plus"></i> </span>
            </a>
        </div>
        <div class="control">
            <a class="button border-radius-0"
               href="{{route('hotel.index',['domain'=>$current_domain->uuid])}}">
                <span class="icon"><i class="fa fa-refresh"></i> </span>
            </a>
        </div>
        <div class="control">
            {{Bulma::dropdownPerRow($hotels)}}
        </div>
        <div class="control">
            <domain-dropdown
                    data-selected="{{json_encode(['uuid'=>$current_domain->uuid,'name'=>$current_domain->name])}}"
                    goto-url="/hotel/d/{id}"></domain-dropdown>
        </div>
    </div>
@endsection
@section('content')
    {!! Form::open(['method'=>'get','route'=>['hotel.index','page'=>request('page'),'domain'=>$current_domain->uuid]]) !!}
    <table class="table is-bordered is-striped is-narrow is-fullwidth">

    </table>
    {!! Form::close() !!}
@endsection
