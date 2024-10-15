# core/views.py

from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def api_root(request, format=None):
    """
    Root API view that lists all available API endpoints in the project.
    """
    return Response({
        'auth': {
            'login': '/auth/token/login/',
            'logout': '/auth/token/logout/',
            'register': '/auth/users/',
            'password_reset': '/auth/users/reset_password/',
            'password_reset_confirm': '/auth/users/reset_password_confirm/',
        },
        'users': '/users/',
    })
