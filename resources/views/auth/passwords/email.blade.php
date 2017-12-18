@extends('layouts.app')

@section('content')
    <div class="columns">
        <div class="column is-one-third is-offset-one-third">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">Khởi tạo lại mật khẩu</p>
                </header>
                <div class="card-content">
                    <div class="content">
                        @if (session('status'))
                            <div class="notification is-success">
                                {{ session('status') }}
                            </div>
                        @endif

                        <form method="POST" action="{{ route('password.email') }}">
                            {{ csrf_field() }}

                            <div class="field">
                                <label class="label">Email</label>
                                <div class="control has-icons-left has-icons-right">
                                    <input class="input @if($errors->has('email')) is-danger @endif" type="text"
                                           placeholder="Email input" name="email"
                                           value="{{ old('email') }}">
                                    <span class="icon is-small is-left">
                                      <i class="fa fa-envelope"></i>
                                    </span>
                                    @if($errors->has('email'))
                                        <span class="icon is-small is-right">
                                      <i class="fa fa-warning"></i>
                                    </span>
                                    @endif
                                </div>
                                @if($errors->has('email'))
                                    <p class="help is-danger">{{ $errors->first('email') }}</p>
                                @endif
                            </div>

                            <div class="field">
                                <div class="column is-6 is-offset-4">
                                    <button type="submit" class="button is-primary">
                                        Gửi link đổi mật khẩu
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
