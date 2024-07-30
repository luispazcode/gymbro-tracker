import { getWorkoutBySlug } from "@/actions";
import { Decrypt } from "@/utils";

interface Props {
	params: {
		slug: string;
	};
	searchParams: {
		id: string;
	};
}

export default async function WorkoutDetailPage({
	params,
	searchParams,
}: Props) {
	const idEncrypted = Decrypt(searchParams.id);
	const workoutDetail = await getWorkoutBySlug(params.slug, idEncrypted);
	console.log(workoutDetail);
	if (!workoutDetail) return <h1>Entrenamiento no encontrado...</h1>;
	// return (
	// 	<section>
	// 		<h1>Entrenamiento: {workoutDetail.name}</h1>
	// 		<p className='text-gray-400 mt-2'>
	// 			Fecha:{" "}
	// 			{workoutDetail.date?.toLocaleString("es-PE", { timeZone: "UTC" })}
	// 		</p>
	// 		<div>{Object.keys(workoutDetail.sets)}</div>
	// 	</section>
	// );
}

// TODO: Show full workout detail
