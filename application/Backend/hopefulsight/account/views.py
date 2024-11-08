from django.shortcuts import get_object_or_404
from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from .models import Account
from .serializers import AccountSerializer
from donator.models import Donator
from donatee.models import Donatee

class AccountViewSet(viewsets.ModelViewSet):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer
    permission_classes = [permissions.IsAuthenticated]
    http_method_names = ['get', 'patch', 'head', 'options']  # Only allow GET and PATCH requests

    def get_object(self):
        # Check if the user has an associated account
        account, created = Account.objects.get_or_create(user=self.request.user)
        return account

    def partial_update(self, request, *args, **kwargs):
        # This method will handle PATCH requests to update account fields
        return super().partial_update(request, *args, **kwargs)
    
    def get_queryset(self):
        # Ensure each Account has an associated Donator
        for account in Account.objects.all():
            if not hasattr(account, 'donator'):
                Donator.objects.create(account=account)
                Donatee.objects.create(account=account)
                
        # Use prefetch_related instead of select_related
        return Account.objects.all().prefetch_related('donator', 'donatee')
