import { createWidgetModel, TAGS_LIBRARY_TABS } from "./create-widget-model";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/ui/tabs";
import { reatomComponent } from "@reatom/react";
import { Textarea } from "~/ui/textarea";

const TabsComponent = reatomComponent(() => {
  const tagsLibraryActiveTab = createWidgetModel.tagsLibraryActiveTabAtom();

  return (
    <Tabs value={tagsLibraryActiveTab} orientation="vertical" className="flex-row">
      <TabsList className="grid h-[200px] gap-[10px] bg-transparent">
        <TabsTrigger
          onClick={() => createWidgetModel.tagsLibraryActiveTabAtom.set(TAGS_LIBRARY_TABS.MODEL)}
          value={TAGS_LIBRARY_TABS.MODEL}
        >
          Model
        </TabsTrigger>

        <TabsTrigger
          onClick={() => createWidgetModel.tagsLibraryActiveTabAtom.set(TAGS_LIBRARY_TABS.HEAD)}
          value={TAGS_LIBRARY_TABS.HEAD}
        >
          Head
        </TabsTrigger>

        <TabsTrigger
          onClick={() => createWidgetModel.tagsLibraryActiveTabAtom.set(TAGS_LIBRARY_TABS.BODY)}
          value={TAGS_LIBRARY_TABS.BODY}
        >
          Body
        </TabsTrigger>

        <TabsTrigger
          onClick={() => createWidgetModel.tagsLibraryActiveTabAtom.set(TAGS_LIBRARY_TABS.THEME)}
          value={TAGS_LIBRARY_TABS.THEME}
        >
          Theme
        </TabsTrigger>

        <TabsTrigger
          onClick={() => createWidgetModel.tagsLibraryActiveTabAtom.set(TAGS_LIBRARY_TABS.IMAGE)}
          value={TAGS_LIBRARY_TABS.IMAGE}
        >
          Image
        </TabsTrigger>
      </TabsList>

      <TabsContent value={TAGS_LIBRARY_TABS.MODEL}>1</TabsContent>
      <TabsContent value={TAGS_LIBRARY_TABS.HEAD}>2</TabsContent>
      <TabsContent value={TAGS_LIBRARY_TABS.BODY}>3</TabsContent>
      <TabsContent value={TAGS_LIBRARY_TABS.THEME}>4</TabsContent>
      <TabsContent value={TAGS_LIBRARY_TABS.IMAGE}>5</TabsContent>
    </Tabs>
  );
});

const TextareaComponent = reatomComponent(() => {
  return (
    <Textarea
      onChange={(e) => createWidgetModel.textareaValueAtom.set(e.target.value)}
      value={createWidgetModel.textareaValueAtom()}
      className="mb-5"
    />
  );
});

interface GirlInfoComponentProps {
  className?: string;
}

const GirlInfoComponent = reatomComponent(({ className }: GirlInfoComponentProps) => {
  const girlData = createWidgetModel.girlDataAtom();

  if (!girlData) {
    return null;
  }

  return (
    <div className={className}>
      <p>{girlData.name}</p>
      <p>{girlData.text}</p>
    </div>
  );
});

export const CreateWidget = reatomComponent(() => {
  return (
    <div>
      <GirlInfoComponent className="mb-5" />
      <TextareaComponent />
      <TabsComponent />
    </div>
  );
});
