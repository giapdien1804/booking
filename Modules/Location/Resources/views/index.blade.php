@extends('layouts.app')
@section('top-one')
    {{Bulma::breadcrumb([
        route('location.index')=>'Địa danh và vị trí'
    ])}}
@endsection
@section('top-tow')
    <ul class="top-link">
        <li>
            <a class="bg-primary has-hover-primary"
               href="{{route('location.create')}}">Tạo mới</a>
        </li>
        <li>
            <a class="bg-light has-hover-light"
               href="{{route('location.index')}}">Làm mới</a>
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
                        <a href="{{route('hotel.index',array_merge(request()->all(),['per_page'=>50]))}}"
                           class="dropdown-item">50</a>
                        <a href="{{route('hotel.index',array_merge(request()->all(),['per_page'=>100]))}}"
                           class="dropdown-item">100</a>
                        <a href="{{route('hotel.index',array_merge(request()->all(),['per_page'=>150]))}}"
                           class="dropdown-item">150</a>
                        <a href="{{route('hotel.index',array_merge(request()->all(),['per_page'=>200]))}}"
                           class="dropdown-item">200</a>
                        <hr class="dropdown-divider">
                        <a href="{{route('hotel.index',array_merge(['per_page'=>$locations->total()],request()->all()))}}"
                           class="dropdown-item">
                            Hiển thị tất cả ({{$locations->total()}})
                        </a>
                    </div>
                </div>
            </div>
        </li>
    </ul>
@endsection
@section('content')
    {!! Form::open(['method'=>'get','route'=>['hotel.index','page'=>request('page')]]) !!}
    <table class="table is-bordered is-striped is-narrow is-fullwidth">

    </table>
    {!! Form::close() !!}
@endsection
