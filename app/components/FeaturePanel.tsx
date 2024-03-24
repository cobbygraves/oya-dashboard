type FeaturePanelProps = {
  icon: React.ReactNode
  title: string
}

function FeaturePanel({ icon, title }: FeaturePanelProps) {
  return (
    <>
      <div className='flex gap-x-5 justify-center items-center mb-3'>
        {icon}
        <p className='text-4xl font-bold'>Your {title} Details</p>
      </div>
      <hr className=' border border-black mb-5' />
    </>
  )
}

export default FeaturePanel
