# Kitsu SDK utility: make_context

from core.context import KitsuContext


def make_context_util(ctxmap, basectx):
    return KitsuContext(ctxmap, basectx)
