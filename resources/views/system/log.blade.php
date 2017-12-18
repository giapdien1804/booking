@extends('layouts.app')
@section('content')
    <div class="columns">
        <div class="column is-2 sidebar">
            <aside class="menu">
                <p class="menu-label">
                    Log Viewer
                </p>
                <ul class="menu-list">
                    @foreach($files as $file)
                        <li><a href="?l={{ base64_encode($file) }}"
                               class="@if ($current_file == $file) is-active @endif">
                                {{$file}}
                            </a></li>
                    @endforeach
                </ul>
            </aside>
        </div>
        <div class="column is-10 table-container">
            @if ($logs === null)
                <div>
                    Log file >50M, please download it.
                </div>
            @else
                <log-view></log-view>
            @endif
            <div>
                @if($current_file)
                    <a href="?dl={{ base64_encode($current_file) }}">
                        <span class="icon"><i class="fa fa-download"></i></span>
                        Download file</a>
                    -
                    <a id="delete-log" href="?del={{ base64_encode($current_file) }}">
                        <span class="icon"><i class="fa fa-trash-o"></i></span>
                        Delete file</a>
                    @if(count($files) > 1)
                        -
                        <a id="delete-all-log" href="?delall=true">
                            <span class="icon"><i class="fa fa-trash"></i></span>
                            Delete all files</a>
                    @endif
                @endif
            </div>
        </div>
    </div>
@endsection
