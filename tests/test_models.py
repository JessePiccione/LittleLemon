from django.test import TestCase
from restaurant.models import MenuItem
class MenuItemTest(TestCase):
    def test_str(self):
        item = MenuItem.objects.create(title='IceCream', price=12.99, inventory=100)
        self.assertEqual(str(item), 'IceCream : 12.99')
