from django.test import TestCase
from django.db.models import QuerySet
from restaurant.models import MenuItem

class MenuViewTest(TestCase):
    def setup(self):
        MenuItem.objects.create(name='IceCream', price=12.99, inventory=100)
    def test_getall(self):
        items = MenuItem.objects.all()
        self.assertIsInstance(items, QuerySet)