class Product:
    def __init__(self, name, price, brand):
        self.name = name
        self.price = price
        self.brand = brand

    def apply_discount(self, discount):
        self.price -= self.price * (discount / 100)

    def get_info(self):
        return f"{self.name} by {self.brand} costs ${self.price:.2f}"
    
    def categ(self):
        return "General Product"
    
    def __str__(self):
        return f"{self.name} ({self.brand}) - ${self.price:.2f}"
    
class Phone(Product):
    def __init__(self, name, price, brand, storage, camera):
        super().__init__(name, price, brand)
        self.storage = storage
        self.camera = camera
    
    def make_call(self, number):
        return f"{self.name} is calling {number}"
    
    def categ(self):
        return "Phone"
    
    def __str__(self):
        return super().__str__() + f", Storage: {self.storage}GB, Camera: {self.camera}MP"
    

class Laptop(Product):
    def __init__(self, name, price, brand, ram, processor):
        super().__init__(name, price, brand)
        self.ram = ram
        self.processor = processor

    def run_program(self, program):
        return f"{self.name} is running {program}"
    
    def categ(self):
        return "Laptop"
    
    def __str__(self):
        return super().__str__() + f", RAM: {self.ram}GB, Processor: {self.processor}"