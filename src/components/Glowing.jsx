import React from 'react'

function Glowing() {
  return (
    <div>
      <div className="flex flex-col items-start">
  <span className="animate-ping bg-blue-500 text-white rounded-full font-bold py-2 px-4 mr-2">Animated Text</span>
  <p>This is the main text with the animated text pinging above it.</p>
</div>

    </div>
  )
}

export default Glowing