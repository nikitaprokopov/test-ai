import { initCreateWidgetModel, TAGS_LIBRARY_TABS, type CreateWidgetModel } from "./create-widget-model";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/ui/tabs";
import { reatomComponent } from "@reatom/react";
import { Textarea } from "~/ui/textarea";

interface TabsComponentProps {
  createWidgetModel: CreateWidgetModel;
}

const TabsComponent = reatomComponent(({ createWidgetModel }: TabsComponentProps) => {
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

interface TextareaComponentProps {
  createWidgetModel: CreateWidgetModel;
}

const TextareaComponent = reatomComponent(({ createWidgetModel }: TextareaComponentProps) => {
  return (
    <Textarea
      onChange={(e) => createWidgetModel.textareaValueAtom.set(e.target.value)}
      value={createWidgetModel.textareaValueAtom()}
      className="mb-5"
    />
  );
});

interface GirlInfoComponentProps {
  createWidgetModel: CreateWidgetModel;
  className?: string;
}

const GirlInfoComponent = reatomComponent(({ className, createWidgetModel }: GirlInfoComponentProps) => {
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
  const createWidgetModel = initCreateWidgetModel();

  return (
    <div>
      <GirlInfoComponent createWidgetModel={createWidgetModel} className="mb-5" />
      <TextareaComponent createWidgetModel={createWidgetModel} />
      <TabsComponent createWidgetModel={createWidgetModel} />
    </div>
  );
});
