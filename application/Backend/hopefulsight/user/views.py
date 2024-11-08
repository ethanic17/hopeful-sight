from rest_framework import viewsets
from .models import CustomUser
from .serializers import CustomUserSerializer
from rest_framework.permissions import IsAuthenticated
from account.models import Account
from donator.models import Donator

class UserViewSet(viewsets.ModelViewSet):
    model = CustomUser
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Ensure each user has an associated Donator
        for user in CustomUser.objects.all():
            if hasattr(user, 'account') and user.account and not hasattr(user.account, 'donator'):
                # Create a Donator if it doesn’t exist
                Donator.objects.create(account=user.account)
        return super().get_queryset()
