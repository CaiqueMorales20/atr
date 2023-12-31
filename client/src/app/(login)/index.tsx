'use client'

import Image from "next/image";
import { useState } from "react";

// Functional Component
export default function Login() {
  // Variables
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [saveInfo, setSaveInfo] = useState(false);

  // Rendering
  return (
    <main className="h-screen w-screen bg-[#F5FBFF] flex items-center justify-center">
      <div className="flex flex-col items-center">
        <Image className="mb-[47.5px]" src="/icon/logo.svg" alt="Logo ATR" width={164} height={277} />
        <h1 className="mb-[54px] text-[28px] text-[#101012] font-semibold text-center">Login</h1>
        {/* Form */}
        <form className="w-[430px] mb-[20px] flex flex-col gap-[17px]">
          {/* Input */}
          <div className="flex flex-col gap-3">
            <label className="text-[16px] text-[#5A5A5D]">Email</label>
            <input className="rounded-[8px] py-[12px] px-[16px] text-[#5A5A5D] border-solid  border border-[#80CAFF]" type="email" placeholder="Digite seu email..." />
          </div>
          {/* Input */}
          <div className="flex flex-col gap-3 ">
            <label className="text-[16px] text-[#5A5A5D]">Senha</label>
            <div className="relative flex w-full">
              <input className="w-full rounded-[8px] py-[12px] px-[16px] text-[#5A5A5D] border-solid  border border-[#80CAFF]" type={passwordVisible ? 'text' : 'password'} placeholder="Digite sua senha..." />
              <button tabIndex={0} type="button" onClick={() => setPasswordVisible(!passwordVisible)}>
                <Image className="absolute cursor-pointer right-[12px] bottom-0 top-0 translate-y-1/2"  src="/icon/eye-open.svg" alt="Ver senha" width={24} height={passwordVisible ? 14 : 24} />
              </button>
            </div>
          </div>
        </form>
        {/* Forgot */}
        <p className="text-[14px] text-[#504C57] mb-[45px] ">Esqueceu a senha ou primeiro acesso? <a href="#" className="text-[#80CAFF]">Clique aqui</a></p>
        {/* Save */}
        <div className="flex items-center mb-[26px] gap-[9px]">
          <Image className="cursor-pointer" onClick={() => setSaveInfo(!saveInfo)} src={saveInfo ? "/icon/checked-true.svg" : "/icon/checked-false.svg"} alt="Salvar dados" width={18} height={18} />
          <p className="text-[#80CAFF] text-[16px]">Continuar conectado</p>
        </div>
        {/* Button */}
        <button className="py-[18px] w-[80%] mx-auto text-white font-semibold rounded-[8px] bg-[#80CAFF]">Entrar</button>
      </div>
    </main>
  );
}