@extends('layouts.app')
@section('top-one')
    @isset($current_domain)
        {{Bulma::breadcrumb([
         route('domain.index')=>'Trang web',
         route('domain.show',['uuid'=>$current_domain->uuid])=>$current_domain->name,
        route('storage.index',['domain'=>$current_domain->uuid])=>'Thư viện media',
        ])}}
    @else
        {{Bulma::breadcrumb([
            route('storage.index')=>'Thư viện media',
            ])}}
    @endif
@endsection
@section('top-tow')
    @isset($current_domain)
        <domain-dropdown data-selected="{{$current_domain->uuid}}" goto-url="/storage/d/{id}"></domain-dropdown>
    @else
        <domain-dropdown data-selected=""></domain-dropdown>
    @endif
@endsection
@section('content')
    @isset($current_domain)
        <file-picker domain="{{$current_domain->uuid}}"></file-picker>
    @else
        <file-picker domain=""></file-picker>
    @endif
@endsection
