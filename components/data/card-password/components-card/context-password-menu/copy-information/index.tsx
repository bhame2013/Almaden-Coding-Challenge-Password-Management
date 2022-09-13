interface CopyInformationProps {
  text: string
  information: string
}

export function CopyInformation({ text, information }: CopyInformationProps) {
  
  function CopyInformationToClipboard() {
    navigator.clipboard.writeText(information)
  }

  return (
    <button type="button" onClick={CopyInformationToClipboard}>
      {text}
    </button>
  );
}
