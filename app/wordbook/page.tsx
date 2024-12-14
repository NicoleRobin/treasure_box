'use client';

import {lusitana} from "@/app/ui/fonts";
import Search from '@/app/ui/wordbook/search';
import {CreateWord} from "@/app/ui/wordbook/buttons";
import {useState} from "react";
import { SpeakerWaveIcon } from '@heroicons/react/24/outline';


export default function Page() {
  const [items, setItems] = useState(["abandon", "engineer"]);

  const addItem = () => {
    const newItem = `新项 ${items.length + 1}`;
    setItems([...items, newItem]);
  };

  // 防止重复点击，也就是防抖
  const [isSpeaking, setIsSpeaking] = useState(false);
  const handleClickSpeaker = (text:string) => {
    if (isSpeaking) return;
    setIsSpeaking(true);

    // 创建 SpeechSynthesisUtterance 实例
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US"; // 设置语言（例如：英语）
    utterance.rate = 1;       // 设置语速（1 为正常语速）
    utterance.pitch = 1;      // 设置音调（1 为默认音调）
    utterance.onend = () => setIsSpeaking(false); // 语音播放结束后重置状态
    speechSynthesis.speak(utterance); // 播放语音
  }

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        生词本
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Search placeholder={"new word"}></Search>
        <CreateWord></CreateWord>
        <ol className="list-decimal pl-5 space-y-2">
          {items.map((item, index) => (
            <>
              <li className="flex gap-2" key={index}>
                {index}
                {item}
                <SpeakerWaveIcon className="w-5" onClick={() => handleClickSpeaker(item)}/>
              </li>
            </>
          ))}
        </ol>
      </div>
    </main>
  )
}