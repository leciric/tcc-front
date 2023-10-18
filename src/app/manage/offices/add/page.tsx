import { Layout } from '@/components/layout'

export default function AddOffice() {
  return (
    <Layout>
      <main>
        <h1 className="mb-8 w-full text-center text-xl font-bold text-secondary ">
          Cadastrar
        </h1>

        <form className="flex flex-col gap-2 md:flex-row md:gap-10">
          <div className="w-full">
            <h2 className="my-8 w-full text-center text-lg font-bold text-secondary md:mt-0 ">
              Cartório
            </h2>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className=" text-base font-bold text-primary"
              >
                Nome
              </label>
              <input
                className="flex h-12 w-full items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2 text-base ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-300"
                type="text"
                placeholder="Insira o nome do cartório"
              />
              <span className="text-sm text-warning ">
                Insira um nome válido
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className=" text-base font-bold text-primary"
              >
                Descrição
              </label>
              <input
                className="flex h-12 w-full items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2 text-base ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-300"
                type="text"
                placeholder="Insira a descrição do cartório"
              />
              <span className="text-sm text-warning ">
                Insira uma descrição válida
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className=" text-base font-bold text-primary"
              >
                CNPJ
              </label>
              <input
                className="flex h-12 w-full items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2 text-base ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-300"
                type="text"
                placeholder="Insira o CNPJ do cartório"
              />
              <span className="text-sm text-warning ">
                Insira um CNPJ válido
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className=" text-base font-bold text-primary"
              >
                Logo da empresa
              </label>

              <div
                tabIndex={0}
                className="flex h-12 cursor-default items-center justify-center rounded-lg border-2 border-primary bg-white"
              >
                <strong className="cursor-default text-base font-bold text-primary">
                  Escolher arquivo
                </strong>
              </div>
            </div>
          </div>

          <div className="w-full">
            <h2 className="my-8 w-full text-center text-lg font-bold text-secondary md:mt-0 ">
              Endereço
            </h2>

            <div className="flex flex-row gap-4">
              <div className="flex w-[90%] flex-col gap-2">
                <label
                  htmlFor="name"
                  className=" text-base font-bold text-primary"
                >
                  Rua
                </label>
                <input
                  className="flex h-12 w-full items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2 text-base ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-300"
                  type="text"
                  placeholder="Insira a rua do cartório"
                />
                <span className="text-sm text-warning ">
                  Insira uma rua válida
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className=" text-base font-bold text-primary"
                >
                  Número
                </label>
                <input
                  className="flex h-12 w-full items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2 text-base ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-300"
                  type="text"
                  placeholder="Insira o número"
                />
                <span className="text-sm text-warning ">
                  Insira um número válido
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className=" text-base font-bold text-primary"
              >
                Bairro
              </label>
              <input
                className="flex h-12 w-full items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2 text-base ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-300"
                type="text"
                placeholder="Insira o bairro do cartório"
              />
              <span className="text-sm text-warning ">
                Insira um bairro válido
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className=" text-base font-bold text-primary"
              >
                Estado
              </label>
              <input
                className="flex h-12 w-full items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2 text-base ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-300"
                type="text"
                placeholder="Insira o estado do cartório"
              />
              <span className="text-sm text-warning ">
                Insira um estado válido
              </span>
            </div>

            <button className="mt-8 flex h-12 w-full items-center justify-center rounded-lg bg-primary font-bold text-white">
              Cadastrar
            </button>
          </div>
        </form>
      </main>
    </Layout>
  )
}
