--
-- PostgreSQL database dump
--

\restrict K4hHNOxC1F5xewYINnao6azkJIeZLNDPBOquAHT5qgQjFkl8kUYEqWbY13RdM0Q

-- Dumped from database version 18.6
-- Dumped by pg_dump version 18.6

-- Started on 2026-08-31 13:32:02

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 224 (class 1259 OID 16416)
-- Name: carts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.carts (
    id integer NOT NULL,
    user_id integer NOT NULL
);


ALTER TABLE public.carts OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 16415)
-- Name: carts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.carts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.carts_id_seq OWNER TO postgres;

--
-- TOC entry 5051 (class 0 OID 0)
-- Dependencies: 223
-- Name: carts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.carts_id_seq OWNED BY public.carts.id;


--
-- TOC entry 226 (class 1259 OID 16432)
-- Name: favorites; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.favorites (
    id integer NOT NULL,
    user_id integer NOT NULL,
    product_id integer NOT NULL
);


ALTER TABLE public.favorites OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 16431)
-- Name: favorites_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.favorites_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.favorites_id_seq OWNER TO postgres;

--
-- TOC entry 5052 (class 0 OID 0)
-- Dependencies: 225
-- Name: favorites_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.favorites_id_seq OWNED BY public.favorites.id;


--
-- TOC entry 220 (class 1259 OID 16390)
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products (
    id integer NOT NULL,
    brand character varying(100) NOT NULL,
    company character varying(255),
    name character varying(255) NOT NULL,
    price numeric(10,2) NOT NULL,
    sizes integer[],
    color character varying(100),
    image text,
    type character varying(100),
    description text,
    gender character varying(50)
);


ALTER TABLE public.products OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16389)
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.products_id_seq OWNER TO postgres;

--
-- TOC entry 5053 (class 0 OID 0)
-- Dependencies: 219
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;


--
-- TOC entry 222 (class 1259 OID 16403)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(255) NOT NULL,
    password_hash text NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    full_name character varying(255)
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16402)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_id_seq OWNER TO postgres;

--
-- TOC entry 5054 (class 0 OID 0)
-- Dependencies: 221
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- TOC entry 4874 (class 2604 OID 16419)
-- Name: carts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carts ALTER COLUMN id SET DEFAULT nextval('public.carts_id_seq'::regclass);


--
-- TOC entry 4875 (class 2604 OID 16435)
-- Name: favorites id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.favorites ALTER COLUMN id SET DEFAULT nextval('public.favorites_id_seq'::regclass);


--
-- TOC entry 4871 (class 2604 OID 16393)
-- Name: products id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);


--
-- TOC entry 4872 (class 2604 OID 16406)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- TOC entry 5043 (class 0 OID 16416)
-- Dependencies: 224
-- Data for Name: carts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.carts (id, user_id) FROM stdin;
\.


--
-- TOC entry 5045 (class 0 OID 16432)
-- Dependencies: 226
-- Data for Name: favorites; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.favorites (id, user_id, product_id) FROM stdin;
\.


--
-- TOC entry 5039 (class 0 OID 16390)
-- Dependencies: 220
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products (id, brand, company, name, price, sizes, color, image, type, description, gender) FROM stdin;
1	nike	Nike Sportswear	DUNK LOW	120.00	{38,39,40,41,42}	black	https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80	sneakers	Performance-driven Nike shoes designed for comfort, durability, and everyday style.	men
2	nike	Nike Sportswear	AIR MAX 90	150.00	{38,39,40,41,42,43}	white	https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80	sneakers	Classic Nike sneakers combining timeless streetwear style with lightweight cushioning.	male
23	nike	Nike Sportswear	BLAZER MID	115.00	{38,39,40,41,42,43}	white	https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80	sneakers	Vintage-inspired Nike high-top sneakers with a clean and versatile design.	male
20	nike	Nike Sportswear	RS-X	125.00	{38,39,40,41,42,43}	white	https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80	sneakers	Bold lifestyle sneakers with a chunky profile and modern streetwear aesthetic.	male
6	new balance	New Balance	574 CORE	115.00	{39,40,41,42,43,44}	green	https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80	sneakers	Comfort-focused New Balance sneakers with a retro running-inspired aesthetic.	male
8	vans	Vans	STAN SMITH	100.00	{38,39,40,41,42,43}	red	https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80	sneakers	Clean and understated sneakers inspired by one of Adidas' most recognizable designs.	male
10	nike	Nike Sportswear	CLUB C 85	105.00	{38,39,40,41,42,43}	white	https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=800&q=80	sneakers	Classic low-profile sneakers with a clean finish and comfortable construction.	male
4	new balance	new Balance	AIR FORCE 1	130.00	{38,39,40,41,42,43,44}	pink	https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=800&q=80	sneakers	Iconic low-top sneakers built around a clean design and versatile everyday styling.	male
30	on	On Running	CLOUD 5	150.00	{39,40,41,42,43,44}	black	https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=800&q=80	running	Lightweight everyday running shoes designed for responsive cushioning and comfort.	female
29	puma	Puma	CAMPUS 00S	120.00	{38,39,40,41,42,43}	brown	https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80	sneakers	Chunky retro sneakers inspired by classic skate and streetwear culture.	male
11	slidsk	Slidsk	Cream Espadrille Sandals	59.99	{36,37,38,39,40}	beige	https://plus.unsplash.com/premium_photo-1764493508099-a448162509d4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D	slides	Cream espadrille sandals with a ruffled front.	female
12	Nike	Nike Sportswear	N-10 Sliders	29.99	{37,38,39,40}	green	https://images.unsplash.com/photo-1622920799137-86c891159e44?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D	slides	Green Nike N-10 sliders with a comfortable and casual design.	male
13	adidas	Adidas	Yeezy Slide	29.99	{37,38,39,40,41,42}	beige	https://images.unsplash.com/photo-1626771652942-93d834f3d1fd?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D	slides	Casual Yeezy Slide made by Adidas	female
14	roxy	Roxy	Roxy S-12	29.99	{37,38,39}	beige	https://images.unsplash.com/photo-1707173513949-da36b73461ad?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D	slides	Beautiful slides for beach	female
15	nike	Nike Sportswear	Boot-sz	229.99	{38,39,40,41}	beige	https://plus.unsplash.com/premium_photo-1674719144437-d1c253a8b775?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D	boots	Long comfortable winter boots for women	female
16	dare	Dare	Dare Boots	299.99	{40,41,42,43,44}	beige	https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D	boots	Warm boots for man	male
17	nope-no	Nope-No	Leopard Boots	139.99	{37,38,39,40,41}	black	https://plus.unsplash.com/premium_photo-1729788891915-76ee1b9e8196?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D	boots	Boots with heels	female
18	adidas	Adidas	Sp-10 Adx	89.99	{36,37,38,39,40}	white	https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D	sneakers	Multicolor sports shoe	female
\.


--
-- TOC entry 5041 (class 0 OID 16403)
-- Dependencies: 222
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, email, password_hash, created_at, full_name) FROM stdin;
16	johannalang.14j@gmail.com	$2b$10$K054g4D7Hn/Up.q8KDQ5h.EoqfsCcS4EyWnxN8DjjLGDXZ.WzOCmm	2026-08-26 20:09:00.903403	Jo
\.


--
-- TOC entry 5055 (class 0 OID 0)
-- Dependencies: 223
-- Name: carts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.carts_id_seq', 1, false);


--
-- TOC entry 5056 (class 0 OID 0)
-- Dependencies: 225
-- Name: favorites_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.favorites_id_seq', 1, false);


--
-- TOC entry 5057 (class 0 OID 0)
-- Dependencies: 219
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_id_seq', 2, true);


--
-- TOC entry 5058 (class 0 OID 0)
-- Dependencies: 221
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 16, true);


--
-- TOC entry 4881 (class 2606 OID 16423)
-- Name: carts carts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carts
    ADD CONSTRAINT carts_pkey PRIMARY KEY (id);


--
-- TOC entry 4883 (class 2606 OID 16425)
-- Name: carts carts_user_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carts
    ADD CONSTRAINT carts_user_id_key UNIQUE (user_id);


--
-- TOC entry 4885 (class 2606 OID 16440)
-- Name: favorites favorites_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_pkey PRIMARY KEY (id);


--
-- TOC entry 4887 (class 2606 OID 16442)
-- Name: favorites favorites_user_id_product_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_user_id_product_id_key UNIQUE (user_id, product_id);


--
-- TOC entry 4877 (class 2606 OID 16401)
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- TOC entry 4879 (class 2606 OID 16414)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 4888 (class 2606 OID 16426)
-- Name: carts carts_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carts
    ADD CONSTRAINT carts_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- TOC entry 4889 (class 2606 OID 16448)
-- Name: favorites favorites_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id) ON DELETE CASCADE;


--
-- TOC entry 4890 (class 2606 OID 16443)
-- Name: favorites favorites_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


-- Completed on 2026-08-31 13:32:02

--
-- PostgreSQL database dump complete
--

\unrestrict K4hHNOxC1F5xewYINnao6azkJIeZLNDPBOquAHT5qgQjFkl8kUYEqWbY13RdM0Q

