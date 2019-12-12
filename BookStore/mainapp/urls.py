from django.urls import path
from . import views

app_name = 'mainapp'

urlpatterns = [
    path('', views.index, name="index"),
    path('book/<int:book_id>', views.book, name='book'),
    path('user/<int:userx_id>', views.user, name='user'),
    path('authentication', views.authentication, name="authentication"),
    path('registration', views.registration, name="registration"),
    path('books_by_genre/<int:genre_id>', views.books_by_genre, name="books_by_genre"),
    path('books_by_country/<int:country_id>', views.books_by_country, name="books_by_country"),
    path('books_by_category/<int:category_id>', views.books_by_category, name="books_by_category"),
    path('exit_from_account', views.exit_from_account, name="exit_from_account"),
    path('search/', views.search, name="search"),
    path('rate_book/<int:book_id>', views.rate_book, name="rate_book"),

]
