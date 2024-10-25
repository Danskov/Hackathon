import React from "react";
import PhotoAlbum, { Photo } from "react-photo-album";

interface Props {
  index: number;
}

const photos: Photo[] = [
  {
    src: "https://i.ytimg.com/vi/Q6Nsvrnnug8/maxresdefault.jpg",
    width: 300,
    height: 200,
  },
  {
    src: "https://hdwpro.com/wp-content/uploads/2017/04/Free-Grumpy-Cat-768x768.jpg",
    width: 300,
    height: 200,
  },
  {
    src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f7fc1898-247f-48fc-9dfa-d8d4541a8853/d64ufd0-4afb9916-a3c8-4ca3-b8b2-e4441a83b8bb.jpg/v1/fill/w_1024,h_768,q_75,strp/my_indifferent_cat_by_monicaapostolova-d64ufd0.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sIm9iaiI6W1t7InBhdGgiOiIvZi9mN2ZjMTg5OC0yNDdmLTQ4ZmMtOWRmYS1kOGQ0NTQxYTg4NTMvZDY0dWZkMC00YWZiOTkxNi1hM2M4LTRjYTMtYjhiMi1lNDQ0MWE4M2I4YmIuanBnIiwid2lkdGgiOiI8PTEwMjQiLCJoZWlnaHQiOiI8PTc2OCJ9XV19.AWTAa7Xn1hbBMo4GDTmGe_-GME0L363LD1R6E5tQ0kQ",
    width: 300,
    height: 200,
  },
  {
    src: "https://piximus.net/media/21663/happy-cats-4.jpg",
    width: 300,
    height: 200,
  },
  {
    src: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.mobsocmedia.com%2Fuploads%2Fsites%2F33%2F20170324110041%2FHappy_Cat_Smiling.jpg&f=1&nofb=1&ipt=88bb98168d15a69c901752f89bda848eb49c4abf7817bba98dacfbde21b4780d&ipo=images",
    width: 300,
    height: 200,
  },
  {
    src: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.mobsocmedia.com%2Fuploads%2Fsites%2F33%2F20170324110041%2FHappy_Cat_Smiling.jpg&f=1&nofb=1&ipt=88bb98168d15a69c901752f89bda848eb49c4abf7817bba98dacfbde21b4780d&ipo=images",
    width: 300,
    height: 200,
  },
];

const PhotoAlbumComponent: React.FC<Props> = (props) => {
  return (
    <div>
      <PhotoAlbum layout="rows" photos={[photos[props.index]]}  />
    </div>
  );
};

export default PhotoAlbumComponent;
