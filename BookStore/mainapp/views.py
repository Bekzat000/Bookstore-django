import books as books
from django.shortcuts import render, get_object_or_404
from django.shortcuts import HttpResponseRedirect, HttpResponse
from django.urls import reverse
import datetime
from random import randint
from .forms import *

def index(request):
    context = dict(create_default_context())
    try:
        error = request.session['error']
        context['error'] = error
        del request.session['error']
    except:
        pass

    try:
        user = User.objects.get(pk=request.session['user_id'])
        context['user'] = user
    except:
        pass
    stars = []
    for book in context['books']:
        stars.append(get_rating_in_stars_list(book.book_user_rating / 2)[0:5])
    item_list = zip(context['books'], stars)
    context['item_list'] = item_list
    return render(request, "mainapp/index.html", context)


def rate_book(request, book_id):
    bookx = get_object_or_404(Book, pk=book_id)
    try:
        ratings = Rating.objects.filter(rating_movie=bookx)
        userx = User.objects.get(pk=request.session['user_id'])
        for i in ratings:
            if i.rating_user == userx:
                return HttpResponseRedirect(reverse('mainapp:book', args=(book_id,)))
        rating_number = int(request.POST['new_rating'])
        new_rating = Rating(rating_user=userx, rating_movie=bookx, rating_number=rating_number)
        new_rating.save()
        sum_of_rating =bookx.movie_user_rating * len(ratings) + rating_number
        bookx.movie_user_rating = sum_of_rating / (len(ratings) + 1)
        bookx.save()
    except:
        pass
    return HttpResponseRedirect(reverse('mainapp:book', args=(book_id,)))


def books_by_genre(request, genre_id):
    context = dict(create_default_context())
    user = None
    try:
        user = User.objects.get(pk=request.session['user_id'])
    except:
        pass
    genre = Genre.objects.get(pk=genre_id)
    found_movies = Book.objects.filter(book_genres=genre)
    context['found_books'] = found_movies
    context['user'] = user
    return render(request, "mainapp/search.html", context)


def books_by_country(request, country_id):
    context = dict(create_default_context())
    user = None
    try:
        user = User.objects.get(pk=request.session['user_id'])
    except:
        pass
    country = Country.objects.get(pk=country_id)
    found_books =Book.objects.filter(book_country=country)
    context['found_books'] = found_books
    context['user'] = user
    return render(request, "mainapp/search.html", context)


def books_by_category(request, category_id):
    context = dict(create_default_context())
    user = None
    try:
        user = User.objects.get(pk=request.session['user_id'])
    except:
        pass
    category = Category.objects.get(pk=category_id)
    found_books = Book.objects.filter(book_categories=category)
    context['found_books'] = found_books
    context['user'] = user
    return render(request, "mainapp/search.html", context)


def user(request, userx_id):
    genres = Genre.objects.all()
    countries = Country.objects.all()

    userx = get_object_or_404(User, pk=userx_id)

    context = {'userx': userx, 'user': None, 'genres': genres, 'countries': countries,
               'favorites': None}

    user = None

    try:
        favorites = Favorite_book.objects.filter(favorite_user=userx)
        context['favorites'] = favorites
    except:
        pass
    return render(request, "mainapp/user.html", context)


def authentication(request):
    books = Book.objects.order_by('book_main_rating')
    genres = Genre.objects.all()
    countries = Country.objects.all()
    new_books = Book.objects.order_by('book_year')[:2]
    context = {'books': books,
               'countries': countries,
               'new_books': new_books,
               'user': None,
               'error': None}
    try:
        user_login = request.POST['user_login']
        user_password = request.POST['user_password']
        try:
            user = User.objects.get(user_login=user_login)
        except:
            request.session['error'] = "Неправильное имя пользователя"
            return HttpResponseRedirect(reverse('mainapp:index'))

        if user_password != user.user_password:
            request.session['error'] = "Неверный пароль"
            return HttpResponseRedirect(reverse('mainapp:index'))

        if user and user_password == user.user_password:
            request.session['user_id'] = user.id
            context['user'] = user
    except:
        pass
    return HttpResponseRedirect(reverse('mainapp:index'))


def registration(request):
    books = Book.objects.order_by('book_main_rating')
    genres = Genre.objects.all()
    countries = Country.objects.all()
    new_books = Book.objects.order_by('book_year')[:2]
    context = {'books': books,
               'countries': countries,
               'new_books': new_books,
               'user': None,
               'error': None}
    try:
        user = User.objects.get(pk=request.session['user_id'])
        context['user'] = user
        return render(request, "mainapp/index.html", context)
    except:
        pass
    try:
        user_name = request.POST['name']
        user_surname = request.POST['surname']
        user_login = request.POST['login']
        user_password = request.POST['password']
        user_conform_password = request.POST['conform-password']

        if user_password != user_conform_password:
            request.session['error'] = "Пароль и подтверждение пароля не совпадают"
            return HttpResponseRedirect(reverse('mainapp:index'))

        try:
            userx = User.objects.get(user_login=user_login)
            request.session['error'] = "Имя пользователя уже занято"
            return HttpResponseRedirect(reverse('mainapp:index'))
        except:
            pass

        user = User(user_name=user_name, user_surname=user_surname, user_login=user_login, user_password=user_password)
        user.save()
        request.session['user_id'] = user.id
        context['user'] = user
    except:
        pass
    return HttpResponseRedirect(reverse('mainapp:index'))

def get_rating_in_stars_list(rating):
    counter = int(rating)
    stars = [2 for i in range(counter)]
    if counter < rating:
        stars.append(1 if rating >= float(counter) + 0.5 else 0)
    if counter < rating:
        counter += 1
    for i in range(10 - counter):
        stars.append(0)
    return stars



def book(request, book_id):
    bookx = get_object_or_404(Book, pk=book_id)
    context = dict(create_default_context())
    context['book'] = bookx
    context['favorite'] = None
    try:
        user = User.objects.get(pk=request.session['user_id'])
        context['user'] = user
    except:
        pass

    try:
        favorite = Favorite_book.objects.get(favorite_user=user, favorite_movie=bookx)
        context['favorite'] = '+'
    except:
        pass
    return render(request, "mainapp/book.html", context)




def create_default_context():
    books = Book.objects.order_by('book_main_rating')
    countries = Country.objects.all()
    categories = Category.objects.all()
    new_books = Book.objects.order_by('book_year')[:2]
    books_category_1 = Book.objects.filter(book_categories = categories[0])
    context = {'books': books,
               'countries': countries,
               'new_books': new_books,
               'categories': categories,
               'books_category_1': books_category_1,
               'user': None,
               'error': None}
    return context


def search(request):
    user = None
    try:
        user = User.objects.get(pk=request.session['user_id'])
        print("user id barrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr")
    except:
        pass
    try:
        searched_text = request.POST['searched_text'].lower()
        found_books = []
        books = Book.objects.all()
        for book in books:
            if book.book_name.lower().count(searched_text) > 0 or book.book_desctiption.lower().count(
                    searched_text) > 0:
                found_books.append(book)
        return render(request, "mainapp/search.html", {'found_books': found_books, 'user': user})
    except:
        pass

def exit_from_account(request):
    books = Book.objects.order_by('book_main_rating')
    genres = Genre.objects.all()
    countries = Country.objects.all()
    new_books = Book.objects.order_by('book_year')[:2]
    context = {'books': books,
               'genres': genres,
               'countries': countries,
               'new_books': new_books,
               'user': None,
               'error': None}
    try:
        if request.session['user_id']:
            del request.session['user_id']
    except:
        pass
    return HttpResponseRedirect(reverse('mainapp:index'))