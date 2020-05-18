from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
  pass


class UserProfile(models.Model):
    name = models.CharField(max_length=255)
    avatar = models.ImageField(upload_to='images/', blank=True, null=True)
    about = models.TextField()
    instagram = models.CharField(max_length=255, blank=True)
    created_by = models.OneToOneField(User, related_name='profile', blank=True, on_delete=models.CASCADE)

    def __str__(self):
        return self.name