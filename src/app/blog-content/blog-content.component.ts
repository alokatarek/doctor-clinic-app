import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.scss']
})
export class BlogContentComponent implements OnInit {

  services:any= [
    {title: 'Articles', anchor: 'الصفحه الرئيسية', content: 'مقالات طبيه'}
  ]
  id:any= null;
  articleArr:any= [];
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap)=> {
      if(params.has('id')) {
        this.id= params.get('id');
        console.log(this.id);  
      }

      if(this.id== 1) {
        this.articleArr= [
          {
            image: '../../assets/articles/162220484860b0e1b0e0439.jpeg',
            title: 'علاج امراض الكلى',
            content: 'يشمل علاج امراض الكلى عدداً من الخطط العلاجية المتبعة للسيطرة على أعراض المرض والحد من المضاعفات. حيث يعتمد البرنامج العلاجي على التخلص من العامل، كالتالي: التحكم في ارتفاع ضغط الدم إذا كان هو السبب وراء المرض، من خلال تغير نمط الحياة، أو اللجوء إلى الأدوية التي يصفها الطبيب، مثل مثبطات الإنزيم المحول للأنجيوتنسين (بالإنجليزية: Angiotensin - Converting Enzyme Inhibitors or ACEIs) وغيرها. ضبط سكر الدم لدى مرضى السكري، وعند الحديث عن هذا الداء فإن أفضل الخطط هي منع الإصابة به بتنظيم الوزن وممارسة الرياضة وتنظيم الغذاء. بل وحتى بعد الإصابة بالسكري تظل تلك الأمور مهمة جداً إضافة إلى العلاج بالأدوية التي يصفها الطبيب.  ضبط نسب الزلال في البول، إذ قد يصف الطبيب بعض العقاقير للسيطرة على تلك الحالة. الأدوية، حيث يعد الاستخدام الموجه لمثبطات الإنزيم المحول للأنجيوتنسين وغيره من العقاقير يمكن أن يكون مفيداً بشكل استثنائي لمرضى السكري وللمرضى المصابين بالبول البروتيني. وتساعد أدوية الستاتينات في حماية مرضى الكلى من مضاعفات أمراض القلب والأوعية الدموية. كذلك ينصح بمراجعة الطبيب في حال تناول أدوية قد تسبب أمراض الكلى، مثل بعض المسكنات والمضادات الحيوية، والأدوية الكيماوية لعلاج السرطان. يجب العلم أن علاج أمراض الكلى يعتمد على نوع المرض نفسه، فلكل مرض منهم طرق يتبعها الطبيب في العلاج، وقد تصل في بعض الأحيان إلى الغسيل الكلوي، أو الجراحة، أو زراعة الكلية.'

          }
        ]
      }
      if(this.id== 2) {
        this.articleArr= [
          {
            image: './assets/articles/162220513060b0e2ca623b0.jpg',
            title: 'انواع ارتفاع ضغط الدم',
            content: `
            قبل الحديث عن اعراض ارتفاع الضغط يجب معرفة أن ارتفاع ضغط الدم يقسم بشكل رئيسي إلى نوعين وفقاً لسبب حدوث ارتفاع ضغط الدم، ويشمل هذين النوعين على ما يلي:

            ارتفاع ضغط الدم الاساسي
            يطلق على ارتفاع ضغط الدم الأساسي ارتفاع ضغط الدم الأولي وهو ارتفاع ضغط الدم الذي يحدث ببطء مع مرور الوقت، ولا يكون هناك سبب معروف أو محدد خلف تطوره، ويعد هذا النوع من ارتفاع ضغط الدم النوع الأكثر شيوعاً.

            يمكن أن تساهم عدة عوامل في الإصابة بارتفاع ضغط الدم الأساسي ومن هذه العوامل ما يلي:

            الميل الوراثي والجيني للإصابة بارتفاع ضغط الدم، وعادةً ما يحدث هذا النوع من ارتفاع ضغط الدم خاصة لدى الشباب والأطفال نتيجة لوراثة طفرات جينية من الوالدين تزيد من خطر الإصابة بارتفاع ضغط الدم.
            التغيرات في الجسم الناجمة عن أحد العوامل مثل التقدم في السن أو التغيرات في وظائف الكلى التي تؤدي إلى الاختلال في مستويات الأملاح والسوائل في الجسم مما يسبب ارتفاع ضغط الدم.
            العوامل البيئية مثل اتباع نمط حياة غير صحي، واتباع نظام غذائي سيء تؤدي إلى اختلالات الوزن والسمنة التي تزيد بشكل كبير من خطر الإصابة بارتفاع ضغط الدم.
            للمزيد: طرق طبيعية لعلاج ارتفاع الضغط

            ارتفاع ضغط الدم الثانوي
            غالباً ما يتطور ارتفاع ضغط الدم الثانوي بسرعة ويصبح أكثر شدة وخطورة من ارتفاع ضغط الدم الأولي، وعادة ما تحدث الإصابة بهذا النوع من ارتفاع ضغط الدم نتيجة للإصابة بحالة مرضية أخرى تؤدي إلى ارتفاع ضغط الدم، ومن الحالات التي يمكن أن تسبب ارتفاع ضغط الدم الثانوي ما يلي:

            انقطاع النفس الانسدادي النومي.
            أمراض الكلى.
            عيوب القلب الخلقية.
            مشاكل الغدة الدرقية.
            تعاطي المخدرات.
            الآثار  الجانبية لبعض أنواع الأدوية.
            بعض أنواع أورام الغدد الصماء.
            مشاكل الغدة الكظرية.

            `
          }
         
        ]
      }

      if(this.id== 3) {
        this.articleArr= [
          {
            image: './assets/articles/162220541460b0e3e6978b9.jpg',
            title: `علاج الم الركبة بالاعشاب الطبيعية`,
            content: `يمكن استخدام بعض الأعشاب في علاج ألم الركبة وتسكين الوجع، وأبرزها:

            الألوفيرا: يعد هلام الصبار أحد الأعشاب الأكثر استخداماً في الطب البديل، حيث يشتهر بخصائصه العلاجية، وقد يساعد أيضاً في علاج آلام المفاصل، وذلك بفضل خصائصه المضادة للالتهابات.
            وللحصول على فوائد الألوفيرا في علاج ألم الركبة، تم وضعه مباشرةً على الجلد، ويجب التأكد من استخدام هلام الصبار الخام.
            
            عشبة مخلب القط: عشبة آخر مضادة للالتهابات وقد تساعد في تقليل التورم الناتج عن التهاب المفاصل، كما أن هذه العشبة تساهم في تعزيز جهاز المناعة.
            ولكن يجب استشارة الطبيب قبل استخدام عشبة مخلب القط في علاج ألم الركبة بالأعشاب، حيث يمكن أن يسبب الغثيان والدوخة وانخفاض ضغط الدم والصداع.
            
            عشبة الأوكالبتوس: تعتبر عشبة الأوكالبتوس من أفضل طرق علاج ألم الركبة بالأعشاب الطبيعية، وذلك لاحتواء أوراقها على مادة العفص، والتي قد تساعد في تقليل التورم والألم المرتبط بالتهاب المفاصل.
            وفي حالة استخدام زيت الأوكالبتوس في علاج آلام الركبة، يجب تخفيفه بزيت ناقل حتى لا يسبب تهيج الجلد، ويفضل اختباره على منطقة صغيرة من الجلد أولاً.
            
            الشاي الأخضر: قد تساعد مضادات الأكسدة المتوفرة في الشاي الأخضر على مكافحة الالتهابات، ويمكن أن يكون لها تأثير فعال في علاج ألم الركبة والمفاصل وتخفيف الأعراض.
            الكركم: يحتوي الكركم على الكركمين ذو الخصائص المضادة للالتهابات، وقد يساعد في علاج ألم الركبة وكذلك علاج التهاب المفاصل الروماتويدي وحالات التهاب المفاصل الأخرى.
            `
          }
        ]
      }
    });

  }
}
