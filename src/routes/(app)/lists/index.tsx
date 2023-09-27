import { component$ } from "@builder.io/qwik";
import { Link, routeLoader$ } from "@builder.io/qwik-city";
import { ListItem } from "~/components/lists/list-item";
import { PageHeader } from "~/components/page-header";
import { CreateListIcon } from "~/icons/list";
import { fetchCurrentUser } from "~/utils/auth";
import { fetchMyLists } from "~/utils/lists";

export const useMyLists = routeLoader$(async ({ sharedMap, error }) => {
  const user = fetchCurrentUser(sharedMap);
  if (!user) throw error(401, "Unauthenticated");
  const lists = await fetchMyLists(user.id);
  return lists;
});
export default component$(() => {
  const myListsSig = useMyLists();
  return (
    <div>
      <PageHeader
        title="Lists"
        end={[
          <Link
            href="/lists/create/"
            key={"create-list"}
            class="btn btn-sm btn-circle btn-ghost"
          >
            <CreateListIcon />
          </Link>,
        ]}
      />

      {/* your lists  */}
      <div class="flex flex-col gap-4 px-4">
        <h3 class="text-xl font-bold">Your Lists</h3>
        <ul class="flex flex-col gap-3">
          {myListsSig.value.map((list) => (
            <ListItem {...list} key={list.id} />
          ))}
        </ul>
      </div>

      <div class="divider"></div>
    </div>
  );
});
