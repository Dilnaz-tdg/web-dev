from models import Product, Phone, Laptop

def main():
    product = Product("Generic Product", 19.99, "BrandA")
    phone = Phone("iPhone", 2000, "BrandB", 128, 12)
    laptop = Laptop("Macbook", 3000, "BrandC", 16, "M1")


    products = [product, phone, laptop]

    for item in products:
        print(item)
        print(item.get_info())
        print(item.categ())
        print()



    print("Applying discount to all products\n")
    for item in products:
        item.apply_discount(10)
        print(item)

    print()

    print(phone.make_call("123-456-7890"))
    print(laptop.run_program("Python IDE"))

if __name__ == "__main__":
    main()
