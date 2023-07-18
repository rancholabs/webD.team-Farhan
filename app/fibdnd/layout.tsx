export default function h5pLayout({ children }: { children: React.ReactNode }) {
	return (
		<section className="w-full h-full overflow-hidden">{children}</section>
	);
}
