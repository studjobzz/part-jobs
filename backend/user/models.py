from django.db import models
from django.contrib.auth.models import User


def source_image_file(instance, filename):
    return '/'.join(['profile', str(instance.id), filename])


def source_cv_file(instance, filename):
    return '/'.join(['user_cv', str(instance.id), filename])


class Profile(models.Model):
    class Sex:
        MALE = 'Male'
        FEMALE = 'Female'
        choices = (
            (MALE, MALE), (FEMALE, FEMALE)
        )

    class Status:
        SINGLE = 'Single'
        MARRIED = 'Married'
        choices = (
            (SINGLE, SINGLE), (MARRIED, MARRIED)
        )

    address = models.CharField(max_length=100, blank=True, verbose_name='Address')
    phone_number = models.CharField(max_length=50, blank=True, verbose_name='Phone Number')
    birthday = models.DateTimeField(blank=True, verbose_name='Birthday')
    sex = models.CharField(max_length=50, choices=Sex.choices)
    status = models.CharField(max_length=50, choices=Status.choices)
    image = models.ImageField(upload_to=source_image_file, max_length=255, blank=True, null=True)
    description = models.TextField(verbose_name='Description', blank=True, null=True)
    user = models.ForeignKey(User, related_name='profile', on_delete=models.CASCADE)
    user_cv = models.FileField(upload_to=source_cv_file, blank=True, null=True)
