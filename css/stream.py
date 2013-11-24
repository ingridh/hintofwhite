class Stream:
    """A lazily computed recursive list."""

    class empty:
        def __repr__(self):
            return 'Stream.empty'
    empty = empty()

    def __init__(self, first, compute_rest=lambda: Stream.empty):
        assert callable(compute_rest), 'compute_rest must be callable.'
        self.first = first
        self._compute_rest = compute_rest

    @property
    def rest(self):
        """Return the rest of the stream, computing it if necessary."""
        if self._compute_rest is not None:
            self._rest = self._compute_rest()
            self._compute_rest = None
        return self._rest

    def __repr__(self):
        return 'Stream({0}, <...>)'.format(repr(self.first))

    def __iter__(self):
        """Return an iterator over the elements in the stream.

        >>> list(zip(range(6), ints))
        [(0, 1), (1, 2), (2, 3), (3, 4), (4, 5), (5, 6)]
        """
        "*** YOUR CODE HERE ***"

    def __getitem__(self, k):
        """Return the k-th element of the stream.

        >>> ints[5]
        6
        >>> increment_stream(ints)[7]
        9
        """
        "*** YOUR CODE HERE ***"

def increment_stream(s):
    """Increment all elements of a stream."""
    return Stream(s.first+1, lambda: increment_stream(s.rest))

# The stream of consecutive integers starting at 1.
ints = Stream(1, lambda: increment_stream(ints))