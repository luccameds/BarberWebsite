import React from "react";

export default function Pricing() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-lg px-4 md:px-8 mx-auto">
        <div className="mb-10 md:mb-16">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
            Escolha seu Plano
          </h2>

          <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
            Esta é uma seção de algum texto de preenchimento simples, também
            conhecido como texto do espaço reservado. Especial para explicar
            melhor sobre o plano, etc...
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-0">
          <div className="w-full sm:w-1/2 lg:w-1/3 bg-gray-800 rounded-lg sm:rounded-r-none p-6 sm:p-8">
            <div className="mb-4">
              <h3 className="text-gray-100 text-2xl sm:text-3xl font-semibold">
                Prata
              </h3>
              <p className="text-gray-300">Benefício 1</p>
            </div>

            <div className="space-x-2 mb-4">
              <span className="text-gray-100 text-4xl font-bold">R$29</span>
              <span className="text-gray-300 text-2xl line-through">R$49</span>
            </div>

            <ul className="text-gray-300 space-y-2 mb-6">
              <li className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span>Benefício 1</span>
              </li>

              <li className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span>Benefício 2</span>
              </li>

              <li className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span>Benefício 3</span>
              </li>
            </ul>

            <a
              href="#"
              className="block bg-gray-500 hover:bg-gray-600 focus-visible:ring ring-indigo-300 text-gray-100 active:text-gray-300 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
            >
              Assinar Plano Básico
            </a>
          </div>

          <div className="w-full sm:w-1/2 bg-gradient-to-tr from-yellow-500 to-yellow-400 rounded-lg shadow-xl p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-4 mb-4">
              <div>
                <h3 className="text-white text-2xl sm:text-3xl font-semibold">
                  Ouro
                </h3>
                <p className="text-indigo-100">Benefício 1 + Benefício 2</p>
              </div>

              <span className="inline-block order-first lg:order-none bg-indigo-200 bg-opacity-50 text-white text-xs font-semibold tracking-wider uppercase rounded-full px-3 py-1">
                Melhor valor
              </span>
            </div>

            <div className="space-x-2 mb-4">
              <span className="text-white text-4xl font-bold">R$49</span>
              <span className="text-indigo-100 text-2xl line-through">
                R$89
              </span>
            </div>

            <ul className="text-indigo-100 space-y-2 mb-6">
              <li className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span>Benefício 1</span>
              </li>

              <li className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span>Benefício 2</span>
              </li>

              <li className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span>Benefício 3</span>
              </li>

              <li className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span>Benefício 4</span>
              </li>

              <li className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span>Benefício 5</span>
              </li>
            </ul>

            <a
              href="#"
              className="block bg-yellow-600 hover:bg-yellow-700 active:bg-yellow-400 focus-visible:ring ring-yellow-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
            >
              Assinar Plano PRO
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
