import { Button, Grid, Header } from "semantic-ui-react";
import PhotoDropzoneWidget from "./PhotoDropzoneWidget";
import { useEffect, useState } from "react";
import PhotoCropperWidget from "./PhotoCropperWidget";

interface Props {
  loading: boolean;
  uploadPhoto: (file: Blob) => void;
}

const PhotoUploadWidget = ({ loading, uploadPhoto }: Props) => {
  const [files, setFiles] = useState<any>([]);
  const [cropper, setCropper] = useState<Cropper>();

  function onCrop() {
    if (cropper) {
      const croppedCanvas = cropper.getCroppedCanvas();
      if (croppedCanvas) {
        croppedCanvas.toBlob((blob) => {
          if (blob) {
            uploadPhoto(blob);
          } else {
            console.error("Blob is null");
          }
        });
      } else {
        console.error("getCroppedCanvas returned null. Check crop box and image loading.");
      }
    }
  }

  useEffect(() => {
    return () => {
      files.forEach((file: any) => URL.revokeObjectURL(file.preview));
    };
  });

  return (
    <Grid>
      <Grid.Column width={4}>
        <Header color="teal" content="Step 1 - add photo" />
        <PhotoDropzoneWidget setFiles={setFiles} />
      </Grid.Column>
      <Grid.Column width={1} />
      <Grid.Column width={4}>
        <Header color="teal" content="Step 2 Resize image" />
        {files && files.length > 0 && <PhotoCropperWidget setCropper={setCropper} imagePreview={files[0].preview} />}
      </Grid.Column>
      <Grid.Column width={1} />
      <Grid.Column width={4}>
        <Header color="teal" content="Step 3 - Preview & Upload" />
        {files && files.length > 0 && (
          <>
            <div className="img-preview" style={{ minHeight: 200, overflow: "hidden" }} />
            <Button.Group widths={2}>
              <Button loading={loading} onClick={onCrop} positive icon="check" />
              <Button disabled={loading} onClick={() => setFiles([])} icon="close" />
            </Button.Group>
          </>
        )}
      </Grid.Column>
    </Grid>
  );
};

export default PhotoUploadWidget;
