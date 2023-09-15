import React from 'react';

type Props = {
  params: { id: string; photoId: string };
};

function PhotoPage({ params: { id, photoId } }: Props) {
  return (
    <div>
      PhotoPage {id} - {photoId}
    </div>
  );
}

export default PhotoPage;
