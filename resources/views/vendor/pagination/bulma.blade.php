@if ($paginator->hasPages())
    <nav class="pagination is-centered" role="navigation" aria-label="pagination">
        {{-- Previous Page Link --}}
        @if ($paginator->onFirstPage())
            <a class="pagination-previous" disabled><span>&laquo;</span></a>
        @else
            <a href="{{ $paginator->previousPageUrl() }}" class="pagination-previous"><span>&laquo;</span></a>
        @endif

        {{-- Next Page Link --}}
        @if ($paginator->hasMorePages())
            <a href="{{ $paginator->nextPageUrl() }}" class="pagination-next" disabled>&raquo;</a>
        @else
            <a class="pagination-next" disabled>&raquo;</a>
        @endif

        {{-- Pagination Elements --}}
        <ul class="pagination-list">
            @foreach ($elements as $element)
                {{-- "Three Dots" Separator --}}
                @if (is_string($element))
                    <li><span class="pagination-ellipsis">&hellip;</span></li>
                @endif

                {{-- Array Of Links --}}
                @if (is_array($element))
                    @foreach ($element as $page => $url)
                        @if ($page == $paginator->currentPage())
                            <li>
                                <a class="pagination-link is-current" aria-label="Page {{ $page }}"
                                   aria-current="page">{{ $page }}</a>
                            </li>
                        @else
                            <li><a class="pagination-link" href="{{ $url }}"
                                   aria-label="Goto page {{ $page }}">{{ $page }}</a>
                            </li>
                        @endif
                    @endforeach
                @endif
            @endforeach
        </ul>
    </nav>
@endif
