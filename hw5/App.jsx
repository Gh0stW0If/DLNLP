import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('gameplay');

  // Mock data for characters, pets, and equipment
  const characters = [
    {
      name: '艾琳',
      role: '弓箭手',
      description: '擅长远程攻击的精灵游侠，拥有敏捷和精准的战斗技巧。',
      image: 'https://placehold.co/150x150/4a90e2/ffffff?text=Elven+Archer '
    },
    {
      name: '布鲁托',
      role: '战士',
      description: '来自北方部落的狂战士，使用巨斧与火焰之力进行近战输出。',
      image: 'https://placehold.co/150x150/ff6b6b/ffffff?text=Barbarian '
    },
    {
      name: '露娜',
      role: '法师',
      description: '掌握古老魔法的神秘少女，能够操控元素与召唤灵体协助战斗。',
      image: 'https://placehold.co/150x150/9759d1/ffffff?text=Mage '
    }
  ];

  const pets = [
    {
      name: '火焰狐狸',
      type: '火属性',
      ability: '火焰喷射：对敌人造成范围灼烧伤害',
      image: 'https://placehold.co/120x120/ff6347/ffffff?text=Fire+Fox '
    },
    {
      name: '冰霜狼',
      type: '冰属性',
      ability: '寒冰咆哮：冻结周围敌人并降低其防御',
      image: 'https://placehold.co/120x120/7ec4cf/ffffff?text=Frost+Wolf '
    },
    {
      name: '机械小猫',
      type: '科技系',
      ability: '能量护盾：为角色提供短暂无敌效果',
      image: 'https://placehold.co/120x120/4f4f4f/ffffff?text=Mech+Cat '
    }
  ];

  const equipments = [
    {
      name: '烈焰之弓',
      type: '武器',
      effect: '+30% 火属性伤害 | 暴击率 +15%',
      rarity: '史诗',
      image: 'https://placehold.co/120x120/ff4757/ffffff?text=Flame+Bow '
    },
    {
      name: '星辰披风',
      type: '防具',
      effect: '+20% 闪避 | 受到伤害时有几率回复生命',
      rarity: '稀有',
      image: 'https://placehold.co/120x120/89cff0/ffffff?text=Star+Cape '
    },
    {
      name: '雷神之锤',
      type: '武器',
      effect: '+40% 雷电伤害 | 攻击时召唤闪电链',
      rarity: '传说',
      image: 'https://placehold.co/120x120/ffd700/ffffff?text=Thunder+Hammer '
    }
  ];

  return (
    <div 
      className="bg-gray-900 text-white font-sans min-h-screen"
      style={{
        backgroundImage: "url('https://placehold.co/200x200/1e1e1e/ffffff?text=Background+Tile ')",
        backgroundRepeat: 'repeat',
        backgroundSize: '200px 200px'
      }}
    >
      {/* Hero Section with Background Image */}
      <header 
        className="relative bg-cover bg-center py-16 px-6 md:py-24 text-center"
        style={{
          backgroundImage: "url('https://placehold.co/1920x600/2c2c2c/ffffff?text=Hero+Image ')"
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">迷宫远征</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            探索无尽的地牢、邂逅伙伴、打造装备，在像素世界中展开你的冒险旅程！
          </p>
          <div className="mt-8">
            <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-full shadow-lg transform transition hover:scale-105">
              开始冒险
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="flex justify-center space-x-4 my-8 text-sm md:text-base">
        <button
          onClick={() => setActiveTab('gameplay')}
          className={`px-4 py-2 rounded-full transition-colors ${
            activeTab === 'gameplay' ? 'bg-purple-600 text-white' : 'bg-gray-800 hover:bg-gray-700'
          }`}
        >
          核心玩法
        </button>
        <button
          onClick={() => setActiveTab('characters')}
          className={`px-4 py-2 rounded-full transition-colors ${
            activeTab === 'characters' ? 'bg-purple-600 text-white' : 'bg-gray-800 hover:bg-gray-700'
          }`}
        >
          角色介绍
        </button>
        <button
          onClick={() => setActiveTab('equipments')}
          className={`px-4 py-2 rounded-full transition-colors ${
            activeTab === 'equipments' ? 'bg-purple-600 text-white' : 'bg-gray-800 hover:bg-gray-700'
          }`}
        >
          装备系统
        </button>
        <button
          onClick={() => setActiveTab('pets')}
          className={`px-4 py-2 rounded-full transition-colors ${
            activeTab === 'pets' ? 'bg-purple-600 text-white' : 'bg-gray-800 hover:bg-gray-700'
          }`}
        >
          宠物伙伴
        </button>
      </nav>

      {/* Content Sections */}
      <main className="max-w-6xl mx-auto px-6 pb-16">

        {/* Gameplay Section */}
        {activeTab === 'gameplay' && (
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-center mb-6">核心玩法</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">随机地牢 · Rogue-like体验</h3>
                <p>每次进入地牢都会生成不同的地图、敌人和宝藏。你永远不知道下一层会遇到什么挑战。</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">多群系探索</h3>
                <p>从炎热的沙漠到寒冷的雪原，每个群系都有独特的敌人、资源和隐藏剧情等待发现。</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">伙伴与宠物系统</h3>
                <p>在旅途中结识志同道合的伙伴，收服可爱的宠物，共同组成最强冒险队伍。</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">装备打造与升级</h3>
                <p>收集材料打造强力装备，通过锻造、附魔、镶嵌等方式不断提升战斗力。</p>
              </div>
            </div>
          </section>
        )}

        {/* Characters Section */}
        {activeTab === 'characters' && (
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-center mb-6">可遇角色</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {characters.map((char, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center text-center">
                  <img src={char.image} alt={char.name} className="rounded-full w-24 h-24 object-cover mb-4" />
                  <h3 className="text-xl font-bold">{char.name}</h3>
                  <p className="text-sm text-gray-400">{char.role}</p>
                  <p className="mt-2 text-sm">{char.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Equipments Section */}
        {activeTab === 'equipments' && (
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-center mb-6">装备系统</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {equipments.map((item, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center text-center">
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-contain mb-4" />
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <p className="text-sm text-gray-400">{item.type} - {item.rarity}</p>
                  <p className="mt-2 text-sm">{item.effect}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Pets Section */}
        {activeTab === 'pets' && (
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-center mb-6">宠物伙伴</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pets.map((pet, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center text-center">
                  <img src={pet.image} alt={pet.name} className="w-20 h-20 object-contain mb-4" />
                  <h3 className="text-xl font-bold">{pet.name}</h3>
                  <p className="text-sm text-gray-400">{pet.type}</p>
                  <p className="mt-2 text-sm">{pet.ability}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 text-center text-sm text-gray-400">
        &copy; 2025 迷宫远征开发组. All rights reserved.
      </footer>
    </div>
  );
};
