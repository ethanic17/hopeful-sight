from django.contrib import admin
from .models import Account
from django.contrib.auth import get_user_model

# Create a custom admin class for Account
class AccountAdmin(admin.ModelAdmin):
    list_display = ['account_id', 'phone_number', 'location', 'user']  # Display the associated user
    search_fields = ['account_id', 'phone_number']  # Add search functionality
# Register the Account model with the custom admin class
admin.site.register(Account, AccountAdmin)
