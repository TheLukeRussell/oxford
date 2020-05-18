from django.urls import include, path

from . import views

app_name = 'frontend'

urlpatterns = [
    path('', views.IndexView.as_view(), name = 'index'),

    # path('favicon.ico', views.IndexView.as_view(), name = 'favicon'),
    # path('manifest.json', views.IndexView.as_view(), name = 'manifest'),
]