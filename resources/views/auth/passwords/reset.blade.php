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

                        <form method="POST" action="{{ route('password.request') }}">
                            {{ csrf_field() }}

                            <input type="hidden" name="token" value="{{ $token }}">
                            <div class="field">
                                <label class="label">Email</label>
                                <div class="control has-icons-left has-icons-right">
                                    <input class="input @if($errors->has('email')) is-danger @endif" type="text"
                                           placeholder="Email input" name="email"
                                           value="{{ $email or old('email') }}">
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
                                <label class="label">Password</label>
                                <div class="control has-icons-left has-icons-right">
                                    <input class="input @if($errors->has('password')) is-danger @endif" type="password"
                                           placeholder="Password input" name="password">
                                    <span class="icon is-small is-left">
                                      <i class="fa fa-user-secret"></i>
                                    </span>
                                    @if($errors->has('password'))
                                        <span class="icon is-small is-right">
                                      <i class="fa fa-warning"></i>
                                    </span>
                                    @endif
                                </div>
                                @if($errors->has('password'))
                                    <p class="help is-danger">{{ $errors->first('password') }}</p>
                                @endif
                            </div>

                            <div class="field">
                                <label class="label">Confirm Password</label>
                                <div class="control has-icons-left has-icons-right">
                                    <input class="input @if($errors->has('password_confirmation')) is-danger @endif"
                                           type="password"
                                           placeholder="Confirm Password input" name="password_confirmation">
                                    <span class="icon is-small is-left">
                                      <i class="fa fa-user-secret"></i>
                                    </span>
                                    @if($errors->has('password_confirmation'))
                                        <span class="icon is-small is-right">
                                      <i class="fa fa-warning"></i>
                                    </span>
                                    @endif
                                </div>
                                @if($errors->has('password_confirmation'))
                                    <p class="help is-danger">{{ $errors->first('password_confirmation') }}</p>
                                @endif
                            </div>
                            <div class="field">
                                <div class="column is-6 is-offset-4">
                                    <button type="submit" class="button is-primary">
                                        Reset Password
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
