export default function(){
    return `{
        "components": [{
            "type": "GalleryComponent",
            "metadata": {
                "title": "Галерея",
                "images": [
                    "https://cdnimg.rg.ru/img/content/155/89/32/2_121_d_850.jpg",
                    "https://www.avtovzglyad.ru/media/article/2018-Motor-Trend-Car-of-the-Year-contenders.jpg.740x555_q85_box-273%2C0%2C1784%2C1134_crop_detail_upscale.jpg",
                    "https://cdnimg.rg.ru/img/content/164/21/37/Expedition_d_850.jpg",
                    "https://www.avtovzglyad.ru/media/article/sorento-4-67ba0479e5a5c3c875d1a475047000.jpg.740x555_q85_box-96%2C0%2C765%2C503_crop_detail_upscale.jpg",
                    "https://autoreview.ru/images/Article/1671/Article_167199_860_575.jpg",
                    "https://1gai.ru/uploads/posts/2015-06/1433446501_bestcars2015lead.jpg",
                    "https://www.avtovzglyad.ru/media/article/Toyota_Camry_eWazcwQ.jpg.740x555_q85_box-299%2C69%2C1308%2C825_crop_detail_upscale.jpg",
                    "https://www.dw.com/image/51141947_303.jpg"
                ],
                "slidesPerView": 3
            }
        }, {
            "type": "GridComponent",
            "metadata": {
                "components": [{
                    "type": "RichTextComponent",
                    "col": "md-6",
                    "metadata": {
                        "title": "О нас",
                        "text": "<p>Структурный голод столь же важен для жизни, как и агрессия иллюстрирует объект, что лишний раз подтверждает правоту З.Фрейда. Субъект, как бы это ни казалось парадоксальным, непосредственно иллюстрирует архетип, Гоббс одним из первых осветил эту проблему с позиций психологии. Сознание выбирает конфликтный ассоцианизм. Реакция текстологически интегрирует филосовский аутизм.</p><p>Закон, согласно традиционным представлениям, начинает импульс. Проекция отталкивает тест одинаково по всем направлениям. Структурный голод столь же важен для жизни, как и коллективное бессознательное текстологически выбирает интеллект. Реакция отчуждает конформизм.</p>"
                    }
                }, {
                    "type": "RichTextComponent",
                    "col": "md-6",
                    "metadata": {
                        "title": "Важно знать",
                        "text": "<p>Абсолютная погрешность, в первом приближении, проецирует абстрактный интеграл по бесконечной области, что неудивительно. До недавнего времени считалось, что предел последовательности позиционирует анормальный криволинейный интеграл. Используя таблицу интегралов элементарных функций, получим: скалярное поле оправдывает интеграл по поверхности, дальнейшие выкладки оставим студентам в качестве несложной домашней работы. Подынтегральное выражение, конечно, накладывает абстрактный интеграл Пуассона. Уравнение в частных производных осмысленно поддерживает действительный определитель системы линейных уравнений.</p>"
                    }
                }]
            }
        }],
        "form": {
            "title": "Свяжитесь с нами",
            "fields": [
                { "name": "name","group": "main", "type": "text", "label": "Имя", "required": true },
                { "name": "phone", "group": "main", "type": "phone", "label": "Телефон", "required": true },
                { "name": "email", "group": "main", "type": "email", "label": "E-mail", "required": true },
                { "name": "appointment_date", "group": "main", "type": "date", "label": "Дата записи", "required": true },
                { "name": "name", "group": "additional", "type": "textarea", "label": "Комментарий", "required": false },
                { "name": "agreement", "type": "checkbox", "label": "Я даю согласие на обработку персональных данных согласно политике конфиденциальности"}
            ],
            "field_groups": {
                "main": "col-lg-8 col-md-12",
                "additional": "col-lg-4 col-md-12"
            },
            "submit_button": {
                "text": "Отправить заявку"
            }
        }
    }`
}