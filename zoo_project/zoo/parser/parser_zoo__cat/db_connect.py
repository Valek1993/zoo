
import psycopg2


def insert(conn, id_image, count_product, name, title, weight, age_of_the_animal, animal_size, availability, price, image, description, link, manufacturer, sale, old_price):
    cursor = conn.cursor()
    cursor.execute(f"INSERT INTO zoo_app_catfood (id_image, count_product, name, title, weight, age_of_the_animal, animal_size, availability, price, image, description, link,  manufacturer, sale, old_price) VALUES ('{id_image}', '{count_product}', '{name}', '{title}', '{weight}', '{age_of_the_animal}', '{animal_size}', '{availability}', '{price}', '{image}', '{description}', '{link}', '{manufacturer}', '{sale}', '{old_price}')")
    conn.commit()


def get_connection():
    try:
        connection = psycopg2.connect(
            database="FreeProject",
            user="postgres",
            password="marsianin49904",
            host="localhost",
            port="5432"
        )
        return connection
    except Exception as Error:
        print("Что-то пошло не так")