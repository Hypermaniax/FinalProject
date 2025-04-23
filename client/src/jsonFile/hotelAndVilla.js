const data = [
    {
        "name": "Resort Tenang Hijau 1",
        "place": "Balikpapan, Kalimantan Timur",
        "rating": 4.5,
        "reviews": 1379,
        "price_per_night": 986624,
        "image_url": "https:\/\/images.pexels.com\/photos\/271639\/pexels-photo-271639.jpeg"
    },
    {
        "name": "Hotel Tenang Alam 2",
        "place": "Kupang, NTT",
        "rating": 4.5,
        "reviews": 2005,
        "price_per_night": 957822,
        "image_url": "https:\/\/images.pexels.com\/photos\/2102587\/pexels-photo-2102587.jpeg"
    },
    {
        "name": "Villa Alam Damai 3",
        "place": "Balikpapan, Kalimantan Timur",
        "rating": 4.4,
        "reviews": 1633,
        "price_per_night": 715404,
        "image_url": "https:\/\/images.pexels.com\/photos\/1571460\/pexels-photo-1571460.jpeg"
    },
    {
        "name": "Resort Alam Mewah 4",
        "place": "Samarinda, Kalimantan Timur",
        "rating": 4.4,
        "reviews": 1825,
        "price_per_night": 1011591,
        "image_url": "https:\/\/images.pexels.com\/photos\/261102\/pexels-photo-261102.jpeg"
    },
    {
        "name": "Hotel Nyaman Asri 5",
        "place": "Padang, Sumatera Barat",
        "rating": 5.0,
        "reviews": 1710,
        "price_per_night": 579008,
        "image_url": "https:\/\/images.pexels.com\/photos\/221457\/pexels-photo-221457.jpeg"
    },
    {
        "name": "Hotel Mewah Mewah 6",
        "place": "Pekanbaru, Riau",
        "rating": 4.4,
        "reviews": 2114,
        "price_per_night": 883605,
        "image_url": "https:\/\/images.pexels.com\/photos\/261102\/pexels-photo-261102.jpeg"
    },
    {
        "name": "Resort Indah Alam 7",
        "place": "Denpasar, Bali",
        "rating": 4.5,
        "reviews": 915,
        "price_per_night": 627487,
        "image_url": "https:\/\/images.pexels.com\/photos\/1571460\/pexels-photo-1571460.jpeg"
    },
    {
        "name": "Villa Damai Alam 8",
        "place": "Yogyakarta, DIY",
        "rating": 4.7,
        "reviews": 1800,
        "price_per_night": 958214,
        "image_url": "https:\/\/images.pexels.com\/photos\/261102\/pexels-photo-261102.jpeg"
    },
    {
        "name": "Penginapan Nyaman Mewah 9",
        "place": "Banjarmasin, Kalimantan Selatan",
        "rating": 4.9,
        "reviews": 569,
        "price_per_night": 919732,
        "image_url": "https:\/\/images.pexels.com\/photos\/221457\/pexels-photo-221457.jpeg"
    },
    {
        "name": "Hotel Indah Mewah 10",
        "place": "Padang, Sumatera Barat",
        "rating": 4.9,
        "reviews": 2131,
        "price_per_night": 865415,
        "image_url": "https:\/\/images.pexels.com\/photos\/106399\/pexels-photo-106399.jpeg"
    },
    {
        "name": "Penginapan Nyaman Elok 11",
        "place": "Palembang, Sumatera Selatan",
        "rating": 5.0,
        "reviews": 851,
        "price_per_night": 922966,
        "image_url": "https:\/\/images.pexels.com\/photos\/221457\/pexels-photo-221457.jpeg"
    },
    {
        "name": "Hotel Elok Ceriah 12",
        "place": "Jayapura, Papua",
        "rating": 4.9,
        "reviews": 1566,
        "price_per_night": 704568,
        "image_url": "https:\/\/images.pexels.com\/photos\/271624\/pexels-photo-271624.jpeg"
    },
    {
        "name": "Penginapan Nyaman Damai 13",
        "place": "Ternate, Maluku Utara",
        "rating": 4.4,
        "reviews": 1059,
        "price_per_night": 921110,
        "image_url": "https:\/\/images.pexels.com\/photos\/261395\/pexels-photo-261395.jpeg"
    },
    {
        "name": "Penginapan Hijau Tenang 14",
        "place": "Jayapura, Papua",
        "rating": 4.5,
        "reviews": 726,
        "price_per_night": 560071,
        "image_url": "https:\/\/images.pexels.com\/photos\/2102587\/pexels-photo-2102587.jpeg"
    },
    {
        "name": "Villa Ceriah Asri 15",
        "place": "Kupang, NTT",
        "rating": 4.8,
        "reviews": 1734,
        "price_per_night": 1139208,
        "image_url": "https:\/\/images.pexels.com\/photos\/261102\/pexels-photo-261102.jpeg"
    },
    {
        "name": "Villa Elok Tenang 16",
        "place": "Denpasar, Bali",
        "rating": 4.9,
        "reviews": 2320,
        "price_per_night": 1072032,
        "image_url": "https:\/\/images.pexels.com\/photos\/221457\/pexels-photo-221457.jpeg"
    },
    {
        "name": "Hotel Tenang Mewah 17",
        "place": "Yogyakarta, DIY",
        "rating": 4.8,
        "reviews": 617,
        "price_per_night": 957841,
        "image_url": "https:\/\/images.pexels.com\/photos\/258154\/pexels-photo-258154.jpeg"
    },
    {
        "name": "Penginapan Mewah Asri 18",
        "place": "Bandung, Jawa Barat",
        "rating": 4.6,
        "reviews": 1742,
        "price_per_night": 573935,
        "image_url": "https:\/\/images.pexels.com\/photos\/271639\/pexels-photo-271639.jpeg"
    },
    {
        "name": "Hotel Ceriah Asri 19",
        "place": "Bandung, Jawa Barat",
        "rating": 4.4,
        "reviews": 897,
        "price_per_night": 1094170,
        "image_url": "https:\/\/images.pexels.com\/photos\/1571460\/pexels-photo-1571460.jpeg"
    },
    {
        "name": "Villa Hijau Indah 20",
        "place": "Surabaya, Jawa Timur",
        "rating": 4.7,
        "reviews": 2409,
        "price_per_night": 567635,
        "image_url": "https:\/\/images.pexels.com\/photos\/271624\/pexels-photo-271624.jpeg"
    },
    {
        "name": "Villa Alam Damai 21",
        "place": "Pekanbaru, Riau",
        "rating": 4.7,
        "reviews": 1973,
        "price_per_night": 624475,
        "image_url": "https:\/\/images.pexels.com\/photos\/221457\/pexels-photo-221457.jpeg"
    },
    {
        "name": "Hotel Nyaman Alam 22",
        "place": "Yogyakarta, DIY",
        "rating": 4.7,
        "reviews": 949,
        "price_per_night": 670464,
        "image_url": "https:\/\/images.pexels.com\/photos\/2102587\/pexels-photo-2102587.jpeg"
    },
    {
        "name": "Penginapan Elok Indah 23",
        "place": "Denpasar, Bali",
        "rating": 4.8,
        "reviews": 1578,
        "price_per_night": 550919,
        "image_url": "https:\/\/images.pexels.com\/photos\/106399\/pexels-photo-106399.jpeg"
    },
    {
        "name": "Resort Alam Indah 24",
        "place": "Kupang, NTT",
        "rating": 5.0,
        "reviews": 1196,
        "price_per_night": 1204467,
        "image_url": "https:\/\/images.pexels.com\/photos\/258154\/pexels-photo-258154.jpeg"
    },
    {
        "name": "Penginapan Tenang Ceriah 25",
        "place": "Surabaya, Jawa Timur",
        "rating": 4.4,
        "reviews": 2107,
        "price_per_night": 1129773,
        "image_url": "https:\/\/images.pexels.com\/photos\/258154\/pexels-photo-258154.jpeg"
    },
    {
        "name": "Resort Indah Alam 26",
        "place": "Lombok, NTB",
        "rating": 4.9,
        "reviews": 2431,
        "price_per_night": 1185831,
        "image_url": "https:\/\/images.pexels.com\/photos\/261395\/pexels-photo-261395.jpeg"
    },
    {
        "name": "Resort Alam Indah 27",
        "place": "Manado, Sulawesi Utara",
        "rating": 4.9,
        "reviews": 1627,
        "price_per_night": 1073234,
        "image_url": "https:\/\/images.pexels.com\/photos\/258154\/pexels-photo-258154.jpeg"
    },
    {
        "name": "Villa Tenang Nyaman 28",
        "place": "Pontianak, Kalimantan Barat",
        "rating": 4.6,
        "reviews": 1113,
        "price_per_night": 1187245,
        "image_url": "https:\/\/images.pexels.com\/photos\/261102\/pexels-photo-261102.jpeg"
    },
    {
        "name": "Hotel Hijau Alam 29",
        "place": "Denpasar, Bali",
        "rating": 4.3,
        "reviews": 745,
        "price_per_night": 1073152,
        "image_url": "https:\/\/images.pexels.com\/photos\/106399\/pexels-photo-106399.jpeg"
    },
    {
        "name": "Penginapan Mewah Indah 30",
        "place": "Pontianak, Kalimantan Barat",
        "rating": 4.5,
        "reviews": 897,
        "price_per_night": 1035034,
        "image_url": "https:\/\/images.pexels.com\/photos\/106399\/pexels-photo-106399.jpeg"
    },
    {
        "name": "Hotel Ceriah Elok 31",
        "place": "Ambon, Maluku",
        "rating": 4.3,
        "reviews": 1697,
        "price_per_night": 1208508,
        "image_url": "https:\/\/images.pexels.com\/photos\/258154\/pexels-photo-258154.jpeg"
    },
    {
        "name": "Villa Tenang Nyaman 32",
        "place": "Pontianak, Kalimantan Barat",
        "rating": 4.9,
        "reviews": 2273,
        "price_per_night": 886210,
        "image_url": "https:\/\/images.pexels.com\/photos\/106399\/pexels-photo-106399.jpeg"
    },
    {
        "name": "Hotel Ceriah Tenang 33",
        "place": "Palembang, Sumatera Selatan",
        "rating": 4.5,
        "reviews": 531,
        "price_per_night": 691401,
        "image_url": "https:\/\/images.pexels.com\/photos\/358485\/pexels-photo-358485.jpeg"
    },
    {
        "name": "Resort Asri Hijau 34",
        "place": "Jayapura, Papua",
        "rating": 4.3,
        "reviews": 1462,
        "price_per_night": 1157725,
        "image_url": "https:\/\/images.pexels.com\/photos\/271639\/pexels-photo-271639.jpeg"
    },
    {
        "name": "Resort Damai Indah 35",
        "place": "Pekanbaru, Riau",
        "rating": 4.4,
        "reviews": 948,
        "price_per_night": 963876,
        "image_url": "https:\/\/images.pexels.com\/photos\/271624\/pexels-photo-271624.jpeg"
    },
    {
        "name": "Penginapan Elok Alam 36",
        "place": "Balikpapan, Kalimantan Timur",
        "rating": 4.4,
        "reviews": 676,
        "price_per_night": 614567,
        "image_url": "https:\/\/images.pexels.com\/photos\/221457\/pexels-photo-221457.jpeg"
    },
    {
        "name": "Hotel Indah Tenang 37",
        "place": "Jayapura, Papua",
        "rating": 4.9,
        "reviews": 956,
        "price_per_night": 650212,
        "image_url": "https:\/\/images.pexels.com\/photos\/271624\/pexels-photo-271624.jpeg"
    },
    {
        "name": "Penginapan Hijau Alam 38",
        "place": "Surabaya, Jawa Timur",
        "rating": 4.3,
        "reviews": 531,
        "price_per_night": 766056,
        "image_url": "https:\/\/images.pexels.com\/photos\/271624\/pexels-photo-271624.jpeg"
    },
    {
        "name": "Resort Nyaman Indah 39",
        "place": "Balikpapan, Kalimantan Timur",
        "rating": 4.9,
        "reviews": 1116,
        "price_per_night": 772348,
        "image_url": "https:\/\/images.pexels.com\/photos\/2102587\/pexels-photo-2102587.jpeg"
    },
    {
        "name": "Penginapan Elok Damai 40",
        "place": "Ambon, Maluku",
        "rating": 4.8,
        "reviews": 2389,
        "price_per_night": 527621,
        "image_url": "https:\/\/images.pexels.com\/photos\/221457\/pexels-photo-221457.jpeg"
    },
    {
        "name": "Hotel Elok Alam 41",
        "place": "Bandung, Jawa Barat",
        "rating": 4.6,
        "reviews": 322,
        "price_per_night": 992941,
        "image_url": "https:\/\/images.pexels.com\/photos\/358485\/pexels-photo-358485.jpeg"
    },
    {
        "name": "Resort Indah Damai 42",
        "place": "Jayapura, Papua",
        "rating": 4.9,
        "reviews": 1541,
        "price_per_night": 1122785,
        "image_url": "https:\/\/images.pexels.com\/photos\/271639\/pexels-photo-271639.jpeg"
    },
    {
        "name": "Villa Elok Elok 43",
        "place": "Surabaya, Jawa Timur",
        "rating": 4.7,
        "reviews": 1905,
        "price_per_night": 771869,
        "image_url": "https:\/\/images.pexels.com\/photos\/358485\/pexels-photo-358485.jpeg"
    },
    {
        "name": "Penginapan Mewah Hijau 44",
        "place": "Ternate, Maluku Utara",
        "rating": 4.3,
        "reviews": 474,
        "price_per_night": 940415,
        "image_url": "https:\/\/images.pexels.com\/photos\/1571460\/pexels-photo-1571460.jpeg"
    },
    {
        "name": "Hotel Mewah Ceriah 45",
        "place": "Ambon, Maluku",
        "rating": 4.8,
        "reviews": 1597,
        "price_per_night": 1007872,
        "image_url": "https:\/\/images.pexels.com\/photos\/271639\/pexels-photo-271639.jpeg"
    },
    {
        "name": "Villa Elok Elok 46",
        "place": "Denpasar, Bali",
        "rating": 4.7,
        "reviews": 2040,
        "price_per_night": 510083,
        "image_url": "https:\/\/images.pexels.com\/photos\/261102\/pexels-photo-261102.jpeg"
    },
    {
        "name": "Penginapan Damai Ceriah 47",
        "place": "Makassar, Sulawesi Selatan",
        "rating": 4.6,
        "reviews": 2381,
        "price_per_night": 1170376,
        "image_url": "https:\/\/images.pexels.com\/photos\/106399\/pexels-photo-106399.jpeg"
    },
    {
        "name": "Hotel Asri Alam 48",
        "place": "Palembang, Sumatera Selatan",
        "rating": 4.8,
        "reviews": 1071,
        "price_per_night": 1242246,
        "image_url": "https:\/\/images.pexels.com\/photos\/106399\/pexels-photo-106399.jpeg"
    },
    {
        "name": "Hotel Damai Alam 49",
        "place": "Jayapura, Papua",
        "rating": 4.4,
        "reviews": 2199,
        "price_per_night": 1053415,
        "image_url": "https:\/\/images.pexels.com\/photos\/261102\/pexels-photo-261102.jpeg"
    },
    {
        "name": "Resort Ceriah Asri 50",
        "place": "Medan, Sumatera Utara",
        "rating": 4.8,
        "reviews": 702,
        "price_per_night": 822011,
        "image_url": "https:\/\/images.pexels.com\/photos\/271624\/pexels-photo-271624.jpeg"
    },
    {
        "name": "Penginapan Tenang Ceriah 51",
        "place": "Bandung, Jawa Barat",
        "rating": 4.6,
        "reviews": 927,
        "price_per_night": 778955,
        "image_url": "https:\/\/images.pexels.com\/photos\/221457\/pexels-photo-221457.jpeg"
    },
    {
        "name": "Resort Indah Ceriah 52",
        "place": "Surabaya, Jawa Timur",
        "rating": 4.8,
        "reviews": 958,
        "price_per_night": 924756,
        "image_url": "https:\/\/images.pexels.com\/photos\/1571460\/pexels-photo-1571460.jpeg"
    },
    {
        "name": "Villa Nyaman Hijau 53",
        "place": "Lombok, NTB",
        "rating": 4.3,
        "reviews": 1292,
        "price_per_night": 671728,
        "image_url": "https:\/\/images.pexels.com\/photos\/261102\/pexels-photo-261102.jpeg"
    },
    {
        "name": "Resort Asri Hijau 54",
        "place": "Balikpapan, Kalimantan Timur",
        "rating": 4.8,
        "reviews": 831,
        "price_per_night": 799352,
        "image_url": "https:\/\/images.pexels.com\/photos\/258154\/pexels-photo-258154.jpeg"
    },
    {
        "name": "Penginapan Damai Mewah 55",
        "place": "Yogyakarta, DIY",
        "rating": 4.4,
        "reviews": 738,
        "price_per_night": 580645,
        "image_url": "https:\/\/images.pexels.com\/photos\/261102\/pexels-photo-261102.jpeg"
    },
    {
        "name": "Hotel Damai Alam 56",
        "place": "Palembang, Sumatera Selatan",
        "rating": 4.9,
        "reviews": 1534,
        "price_per_night": 1037463,
        "image_url": "https:\/\/images.pexels.com\/photos\/261395\/pexels-photo-261395.jpeg"
    },
    {
        "name": "Villa Tenang Ceriah 57",
        "place": "Banjarmasin, Kalimantan Selatan",
        "rating": 4.4,
        "reviews": 2416,
        "price_per_night": 977627,
        "image_url": "https:\/\/images.pexels.com\/photos\/106399\/pexels-photo-106399.jpeg"
    },
    {
        "name": "Hotel Ceriah Asri 58",
        "place": "Pekanbaru, Riau",
        "rating": 4.9,
        "reviews": 1901,
        "price_per_night": 1070732,
        "image_url": "https:\/\/images.pexels.com\/photos\/1571460\/pexels-photo-1571460.jpeg"
    },
    {
        "name": "Villa Asri Tenang 59",
        "place": "Jayapura, Papua",
        "rating": 5.0,
        "reviews": 2043,
        "price_per_night": 1113039,
        "image_url": "https:\/\/images.pexels.com\/photos\/261102\/pexels-photo-261102.jpeg"
    },
    {
        "name": "Penginapan Damai Damai 60",
        "place": "Manado, Sulawesi Utara",
        "rating": 4.3,
        "reviews": 2115,
        "price_per_night": 507577,
        "image_url": "https:\/\/images.pexels.com\/photos\/261395\/pexels-photo-261395.jpeg"
    },
    {
        "name": "Hotel Asri Nyaman 61",
        "place": "Surabaya, Jawa Timur",
        "rating": 4.8,
        "reviews": 2271,
        "price_per_night": 1165270,
        "image_url": "https:\/\/images.pexels.com\/photos\/106399\/pexels-photo-106399.jpeg"
    },
    {
        "name": "Villa Mewah Hijau 62",
        "place": "Ternate, Maluku Utara",
        "rating": 5.0,
        "reviews": 408,
        "price_per_night": 771833,
        "image_url": "https:\/\/images.pexels.com\/photos\/221457\/pexels-photo-221457.jpeg"
    },
    {
        "name": "Resort Tenang Elok 63",
        "place": "Denpasar, Bali",
        "rating": 4.5,
        "reviews": 752,
        "price_per_night": 998977,
        "image_url": "https:\/\/images.pexels.com\/photos\/1571460\/pexels-photo-1571460.jpeg"
    },
    {
        "name": "Villa Mewah Ceriah 64",
        "place": "Palembang, Sumatera Selatan",
        "rating": 4.4,
        "reviews": 2116,
        "price_per_night": 751778,
        "image_url": "https:\/\/images.pexels.com\/photos\/261102\/pexels-photo-261102.jpeg"
    },
    {
        "name": "Villa Hijau Elok 65",
        "place": "Surabaya, Jawa Timur",
        "rating": 4.6,
        "reviews": 594,
        "price_per_night": 820402,
        "image_url": "https:\/\/images.pexels.com\/photos\/271624\/pexels-photo-271624.jpeg"
    },
    {
        "name": "Villa Damai Indah 66",
        "place": "Yogyakarta, DIY",
        "rating": 4.7,
        "reviews": 345,
        "price_per_night": 1034700,
        "image_url": "https:\/\/images.pexels.com\/photos\/261102\/pexels-photo-261102.jpeg"
    },
    {
        "name": "Hotel Ceriah Asri 67",
        "place": "Pekanbaru, Riau",
        "rating": 4.4,
        "reviews": 2202,
        "price_per_night": 1013981,
        "image_url": "https:\/\/images.pexels.com\/photos\/271624\/pexels-photo-271624.jpeg"
    },
    {
        "name": "Villa Indah Nyaman 68",
        "place": "Balikpapan, Kalimantan Timur",
        "rating": 4.5,
        "reviews": 1076,
        "price_per_night": 920727,
        "image_url": "https:\/\/images.pexels.com\/photos\/221457\/pexels-photo-221457.jpeg"
    },
    {
        "name": "Hotel Damai Elok 69",
        "place": "Kupang, NTT",
        "rating": 4.6,
        "reviews": 707,
        "price_per_night": 834044,
        "image_url": "https:\/\/images.pexels.com\/photos\/261102\/pexels-photo-261102.jpeg"
    },
    {
        "name": "Penginapan Hijau Tenang 70",
        "place": "Bandung, Jawa Barat",
        "rating": 4.9,
        "reviews": 1426,
        "price_per_night": 555343,
        "image_url": "https:\/\/images.pexels.com\/photos\/271624\/pexels-photo-271624.jpeg"
    },
    {
        "name": "Hotel Indah Hijau 71",
        "place": "Pontianak, Kalimantan Barat",
        "rating": 4.7,
        "reviews": 1982,
        "price_per_night": 1180988,
        "image_url": "https:\/\/images.pexels.com\/photos\/261102\/pexels-photo-261102.jpeg"
    },
    {
        "name": "Penginapan Asri Nyaman 72",
        "place": "Jayapura, Papua",
        "rating": 4.9,
        "reviews": 423,
        "price_per_night": 752356,
        "image_url": "https:\/\/images.pexels.com\/photos\/221457\/pexels-photo-221457.jpeg"
    },
    {
        "name": "Villa Asri Asri 73",
        "place": "Palembang, Sumatera Selatan",
        "rating": 4.6,
        "reviews": 601,
        "price_per_night": 896814,
        "image_url": "https:\/\/images.pexels.com\/photos\/358485\/pexels-photo-358485.jpeg"
    },
    {
        "name": "Penginapan Tenang Indah 74",
        "place": "Pekanbaru, Riau",
        "rating": 4.4,
        "reviews": 884,
        "price_per_night": 1060657,
        "image_url": "https:\/\/images.pexels.com\/photos\/221457\/pexels-photo-221457.jpeg"
    },
    {
        "name": "Penginapan Mewah Indah 75",
        "place": "Bandung, Jawa Barat",
        "rating": 4.9,
        "reviews": 997,
        "price_per_night": 992762,
        "image_url": "https:\/\/images.pexels.com\/photos\/258154\/pexels-photo-258154.jpeg"
    },
    {
        "name": "Penginapan Mewah Asri 76",
        "place": "Jayapura, Papua",
        "rating": 4.3,
        "reviews": 1846,
        "price_per_night": 512998,
        "image_url": "https:\/\/images.pexels.com\/photos\/261102\/pexels-photo-261102.jpeg"
    },
    {
        "name": "Penginapan Damai Indah 77",
        "place": "Surabaya, Jawa Timur",
        "rating": 4.5,
        "reviews": 529,
        "price_per_night": 593202,
        "image_url": "https:\/\/images.pexels.com\/photos\/1571460\/pexels-photo-1571460.jpeg"
    },
    {
        "name": "Resort Hijau Alam 78",
        "place": "Kupang, NTT",
        "rating": 4.5,
        "reviews": 2178,
        "price_per_night": 490542,
        "image_url": "https:\/\/images.pexels.com\/photos\/271624\/pexels-photo-271624.jpeg"
    },
    {
        "name": "Hotel Mewah Hijau 79",
        "place": "Manado, Sulawesi Utara",
        "rating": 4.7,
        "reviews": 2354,
        "price_per_night": 490422,
        "image_url": "https:\/\/images.pexels.com\/photos\/1571460\/pexels-photo-1571460.jpeg"
    },
    {
        "name": "Hotel Asri Hijau 80",
        "place": "Jayapura, Papua",
        "rating": 4.7,
        "reviews": 2432,
        "price_per_night": 1216685,
        "image_url": "https:\/\/images.pexels.com\/photos\/221457\/pexels-photo-221457.jpeg"
    },
    {
        "name": "Hotel Tenang Alam 81",
        "place": "Bandung, Jawa Barat",
        "rating": 4.8,
        "reviews": 897,
        "price_per_night": 542360,
        "image_url": "https:\/\/images.pexels.com\/photos\/261102\/pexels-photo-261102.jpeg"
    },
    {
        "name": "Penginapan Indah Elok 82",
        "place": "Samarinda, Kalimantan Timur",
        "rating": 4.4,
        "reviews": 932,
        "price_per_night": 571171,
        "image_url": "https:\/\/images.pexels.com\/photos\/358485\/pexels-photo-358485.jpeg"
    },
    {
        "name": "Villa Damai Hijau 83",
        "place": "Pontianak, Kalimantan Barat",
        "rating": 4.7,
        "reviews": 708,
        "price_per_night": 1020218,
        "image_url": "https:\/\/images.pexels.com\/photos\/271639\/pexels-photo-271639.jpeg"
    },
    {
        "name": "Resort Asri Indah 84",
        "place": "Pontianak, Kalimantan Barat",
        "rating": 4.7,
        "reviews": 1099,
        "price_per_night": 1107668,
        "image_url": "https:\/\/images.pexels.com\/photos\/221457\/pexels-photo-221457.jpeg"
    },
    {
        "name": "Hotel Mewah Alam 85",
        "place": "Kupang, NTT",
        "rating": 5.0,
        "reviews": 418,
        "price_per_night": 1114922,
        "image_url": "https:\/\/images.pexels.com\/photos\/2102587\/pexels-photo-2102587.jpeg"
    },
    {
        "name": "Villa Hijau Damai 86",
        "place": "Lombok, NTB",
        "rating": 4.8,
        "reviews": 1823,
        "price_per_night": 979553,
        "image_url": "https:\/\/images.pexels.com\/photos\/271639\/pexels-photo-271639.jpeg"
    },
    {
        "name": "Penginapan Elok Mewah 87",
        "place": "Ternate, Maluku Utara",
        "rating": 4.6,
        "reviews": 790,
        "price_per_night": 1087913,
        "image_url": "https:\/\/images.pexels.com\/photos\/271624\/pexels-photo-271624.jpeg"
    },
    {
        "name": "Resort Hijau Hijau 88",
        "place": "Medan, Sumatera Utara",
        "rating": 4.6,
        "reviews": 2309,
        "price_per_night": 1010396,
        "image_url": "https:\/\/images.pexels.com\/photos\/261395\/pexels-photo-261395.jpeg"
    },
    {
        "name": "Villa Tenang Indah 89",
        "place": "Manado, Sulawesi Utara",
        "rating": 4.5,
        "reviews": 413,
        "price_per_night": 1210608,
        "image_url": "https:\/\/images.pexels.com\/photos\/106399\/pexels-photo-106399.jpeg"
    },
    {
        "name": "Resort Indah Ceriah 90",
        "place": "Lombok, NTB",
        "rating": 4.8,
        "reviews": 368,
        "price_per_night": 682101,
        "image_url": "https:\/\/images.pexels.com\/photos\/221457\/pexels-photo-221457.jpeg"
    },
    {
        "name": "Penginapan Ceriah Hijau 91",
        "place": "Ambon, Maluku",
        "rating": 4.9,
        "reviews": 2435,
        "price_per_night": 540354,
        "image_url": "https:\/\/images.pexels.com\/photos\/271639\/pexels-photo-271639.jpeg"
    },
    {
        "name": "Resort Asri Tenang 92",
        "place": "Banjarmasin, Kalimantan Selatan",
        "rating": 4.5,
        "reviews": 744,
        "price_per_night": 951303,
        "image_url": "https:\/\/images.pexels.com\/photos\/271624\/pexels-photo-271624.jpeg"
    },
    {
        "name": "Resort Hijau Elok 93",
        "place": "Ambon, Maluku",
        "rating": 4.8,
        "reviews": 1067,
        "price_per_night": 497827,
        "image_url": "https:\/\/images.pexels.com\/photos\/271624\/pexels-photo-271624.jpeg"
    },
    {
        "name": "Penginapan Hijau Indah 94",
        "place": "Surabaya, Jawa Timur",
        "rating": 5.0,
        "reviews": 2479,
        "price_per_night": 534629,
        "image_url": "https:\/\/images.pexels.com\/photos\/261395\/pexels-photo-261395.jpeg"
    },
    {
        "name": "Resort Elok Nyaman 95",
        "place": "Yogyakarta, DIY",
        "rating": 4.6,
        "reviews": 2051,
        "price_per_night": 1115411,
        "image_url": "https:\/\/images.pexels.com\/photos\/261102\/pexels-photo-261102.jpeg"
    },
    {
        "name": "Resort Hijau Asri 96",
        "place": "Ambon, Maluku",
        "rating": 5.0,
        "reviews": 1844,
        "price_per_night": 511868,
        "image_url": "https:\/\/images.pexels.com\/photos\/271624\/pexels-photo-271624.jpeg"
    },
    {
        "name": "Resort Alam Damai 97",
        "place": "Pontianak, Kalimantan Barat",
        "rating": 4.8,
        "reviews": 639,
        "price_per_night": 564893,
        "image_url": "https:\/\/images.pexels.com\/photos\/221457\/pexels-photo-221457.jpeg"
    },
    {
        "name": "Resort Nyaman Nyaman 98",
        "place": "Pekanbaru, Riau",
        "rating": 4.8,
        "reviews": 2218,
        "price_per_night": 791463,
        "image_url": "https:\/\/images.pexels.com\/photos\/261395\/pexels-photo-261395.jpeg"
    },
    {
        "name": "Hotel Damai Elok 99",
        "place": "Lombok, NTB",
        "rating": 5.0,
        "reviews": 1432,
        "price_per_night": 493704,
        "image_url": "https:\/\/images.pexels.com\/photos\/271639\/pexels-photo-271639.jpeg"
    },
    {
        "name": "Resort Asri Hijau 100",
        "place": "Pekanbaru, Riau",
        "rating": 4.6,
        "reviews": 680,
        "price_per_night": 564414,
        "image_url": "https:\/\/images.pexels.com\/photos\/106399\/pexels-photo-106399.jpeg"
    }
]
export default data