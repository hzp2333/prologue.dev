import Image from "next/image"
import { useMDXComponent } from "next-contentlayer2/hooks"
import Link from "next/link"



const ResponsiveImage = (props) => (
  <Image
    alt={props.alt}
    width={1920}
    height={1080}
    {...props}
    className="drop-shadow-xs rounded-sm"
  />
);

const ResponsiveLink = (props) => (
  <Link
target="_blank"
    {...props}

  />
);

const components = {
  img: ResponsiveImage,
  a: ResponsiveLink
};


export function MDXComponent({ code }) {
  const Component = useMDXComponent(code)

  return<Component components={components} />  
}