import Link from "next/link";

interface ResumeCardProps {
	children: React.ReactNode;
}

export const ResumeCard = ({ children }: ResumeCardProps) => {
	return (
		<div className='w-full flex flex-col gap-8 border border-gray-300 p-6 shadow-md rounded-md text-sm'>
			{children}
		</div>
	);
};

ResumeCard.Header = function ResumeCardHeader({
	title,
	subTitle,
}: {
	title: string;
	subTitle: string;
}) {
	return (
		<div className='flex flex-col gap-2'>
			<h3>{title}</h3>
			<p className='text-xs text-gray-400'>{subTitle}</p>
		</div>
	);
};

ResumeCard.Body = function ResumeCardBody({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div className='w-full'>{children}</div>;
};

ResumeCard.Link = function ResumeCardLink({
	text,
	href,
}: {
	text: string;
	href: string;
}) {
	return (
		<Link href={href} className='text-xs underline'>
			{text}
		</Link>
	);
};
