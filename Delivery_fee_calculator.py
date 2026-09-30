orders = [250, 600, 150, 800, 400]
free_delivery_limit = 500
delivery_fee = 40

for amount in orders:
    fee = 0 if amount >= free_delivery_limit else delivery_fee
    print(f"Order: ₹{amount}, Delivery: ₹{fee}, Total: ₹{amount + fee}")
