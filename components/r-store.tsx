"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";

import CaseImage1 from "@/public/CaseImage1.png";
import CaseImage2 from "@/public/CaseImage2.png";
import CaseImage3 from "@/public/CaseImage3.png";
import HeadphonesImage1 from "@/public/HeadphonesImage1.png";
import HeadphonesImage2 from "@/public/HeadphonesImage2.png";
import HeadphonesImage3 from "@/public/HeadphonesImage3.png";
import WirelessHeadphonesImage1 from "@/public/WirelessHeadphonesImage1.png";
import WirelessHeadphonesImage2 from "@/public/WirelessHeadphonesImage2.png";
import WirelessHeadphonesImage3 from "@/public/WirelessHeadphonesImage3.png";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";

interface Item {
  name: string;
  image: string | StaticImageData;
}

export function RStore() {
  const [isOpen, setIsOpen] = useState(false);

  const [activeItem, setActiveItem] = useState<Item>({ name: "", image: "" });

  const toggleModal = () => setIsOpen(!isOpen);

  const openModal = (item: Item) => {
    setActiveItem(item);
    toggleModal();
  };

  const products = [
    {
      category: "Чехлы",
      items: [
        { name: "Стеклянные", image: CaseImage3 },
        { name: "Силиконовые", image: CaseImage1 },
        { name: "Кожаные", image: CaseImage2 },
      ],
    },
    {
      category: "Наушники",
      items: [
        {
          name: "Apple EarPods",
          price: "1 990 ₽",
          image: HeadphonesImage1,
        },
        {
          name: "Apple EarPods",
          price: "1 990 ₽",
          image: HeadphonesImage2,
        },
        {
          name: "Apple EarPods",
          price: "2 990 ₽",
          image: HeadphonesImage3,
        },
      ],
    },
    {
      category: "Беспроводные наушники",
      items: [
        {
          name: "Apple AirPods",
          price: "13 990 ₽",
          image: WirelessHeadphonesImage1,
        },
        {
          name: "Apple AirPods Pro",
          price: "22 990 ₽",
          image: WirelessHeadphonesImage2,
        },
        {
          name: "Beats",
          price: "19 990 ₽",
          image: WirelessHeadphonesImage3,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[--background] p-5 flex grow justify-center">
      <div className="max-w-[1920px] py-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">R-STORE</h1>
          <Button
            variant="default"
            className="bg-[--button] hover:bg-[--button-secondary] p-5"
          >
            <Link href="/login" className="px-3 py-1">
              Войти
            </Link>
          </Button>
        </header>
        <main>
          {products.map((section, index) => (
            <section key={index} className="mb-12">
              <p className="text-lg font-medium mb-2 text-gray-600">
                {section.category}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item, itemIndex) => (
                  <Card
                    key={itemIndex}
                    onClick={() => openModal(item)}
                    className="w-[20vw] aspect-auto overflow-hidden hover:cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl md:hover:scale-[103%] md:hover:shadow-xl"
                  >
                    <CardContent className="p-6 flex flex-col items-center justify-between h-full">
                      <Image
                        src={item.image}
                        sizes="100vw"
                        alt={item.name}
                        className="w-auto h-auto object-cover"
                      />
                      <div className="w-full p-6 flex items-center justify-between">
                        <h3 className="font-semibold text-xl mb-2">
                          {item.name}
                        </h3>
                        {"price" in item && (
                          <p className="text-gray-600 text-[--highlight]">
                            {item.price}
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </main>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
              className="bg-white rounded-lg p-6 w-full max-w-md relative"
            >
              <button
                onClick={toggleModal}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
              <div className="mt-4">
                <Image
                  src={activeItem.image}
                  alt="Product"
                  sizes="100vw"
                  className="w-full h-auto rounded-lg"
                />
                <h2 className="text-xl font-semibold mt-4 text-center">
                  {activeItem.name}
                </h2>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
