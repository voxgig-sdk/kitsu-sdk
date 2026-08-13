# Kitsu SDK utility: make_context

from projectname_sdk.core.context import KitsuContext


def make_context_util(ctxmap, basectx):
    return KitsuContext(ctxmap, basectx)
