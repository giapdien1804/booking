@extends('layouts.app')
@section('top-one')
    {{Bulma::breadcrumb([
            route('domain.index')=>'Trang web',
            route('domain.show',['uuid'=>$current_domain->uuid])=>$current_domain->name,
            route('hotel.index',['domain'=>$current_domain->uuid])=>'Khách sạn',
            route('hotel.create',['domain'=>$current_domain->uuid])=>'Thêm mới',
        ])}}
@endsection
@section('top-tow')
    <div class="field is-grouped">
        <div class="control is-expanded">
            <a class="button border-radius-0 is-fullwidth"
               href="{{route('hotel.create',['domain'=>$current_domain->uuid])}}">
                <span class="icon"><i class="fa fa-refresh"></i> </span>
            </a>
        </div>
        <div class="control">
            <domain-dropdown
                    data-selected="{{json_encode(['uuid'=>$current_domain->uuid,'name'=>$current_domain->name])}}"
                    goto-url="/hotel/d/{id}/create"></domain-dropdown>
        </div>
    </div>
@endsection

@section('content')
    <div class="columns is-multiline">
        <div class="column is-8">
            <bulma-card card-title="Tổng quan">
                <div class="field is-grouped">
                    <div class="control is-expanded">
                        <label class="label">Tên khách sạn</label>
                        <input type="text" class="input is-fullwidth" name="title">
                    </div>
                    <div class="control">
                        <star-input input-label="Hạng khách sạn"></star-input>
                    </div>
                </div>
                <div class="field is-grouped">
                    <div class="control">
                        <label class="label">Check in</label>
                        <time-picker input-name="check_in"></time-picker>
                    </div>
                    <div class="control">
                        <label class="label">Check out</label>
                        <time-picker input-name="check_out"></time-picker>
                    </div>
                    <div class="control">
                        {{Bulma::text('Khoảng giá từ','min_price')}}
                    </div>
                    <div class="control">
                        {{Bulma::text('đến','max_price')}}
                    </div>
                </div>
            </bulma-card>
            <bulma-card card-title="Thông tin phòng">
                <div class="columns">
                    <div class="column is-6">
                        {{Bulma::text('Số lượng phòng','number_of_room')}}
                        {{Bulma::textarea('Tùy chọn đặt phòng','booking_options')}}
                    </div>
                    <div class="column is-6">
                        <text-repeater input-name="room_type" input-label="Loại phòng"></text-repeater>
                    </div>
                </div>
            </bulma-card>
            <bulma-card card-title="Tiện nghi">
                <text-repeater input-name="amenities[feature]" input-label="Tiện Hàng đầu"></text-repeater>
                <div class="is-divider" data-content="Hotel"></div>
                <text-repeater input-name="amenities[hotel]" input-label="Tiện nghi của khách sạn"></text-repeater>
                <div class="is-divider" data-content="room"></div>
                <text-repeater input-name="amenities[room]" input-label="Tiện nghi phòng"></text-repeater>
                <div class="is-divider" data-content="activities"></div>
                <text-repeater input-name="amenities[activity]" input-label="Hoạt động giải trí"></text-repeater>
            </bulma-card>
        </div>
        <div class="column is-4">
            <google-map-input input-name="address"
                              api-key="{{config('location.google_map_api_key')}}"></google-map-input>

            <text-repeater input-name="style" input-label="Phong cách khác sạn"></text-repeater>
        </div>
    </div>
@endsection